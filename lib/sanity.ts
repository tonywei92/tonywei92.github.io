// sanity.js
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
  perspective: "published",
});

export const imageBuilder = imageUrlBuilder(client);

export async function getPosts(preview?: boolean, limit?: number) {
  const query = preview
    ? `*[_type == "post"]{
        _id,
        title,
        slug,
        "tags": tags[]->,
        description,
        createdAt
      } | order(createdAt desc) ${limit ? `[0..${limit}]` : ""}`
    : `*[_type == "post"]{
        _id,
        title,
        slug,
        body,
        "tags": tags[]->,
        description,
        createdAt
      } | order(createdAt desc) ${limit ? `[0..${limit}]` : ""}`;
  const posts = await client.fetch(query);
  return posts;
}

export async function getPostBySlug(slug: string) {
  const post = await client.fetch(
    `*[_type == "post" && slug.current == "${slug}"][0]{
        _id,
        title,
        slug,
        body,
        "mainImage": mainImage.asset->url,
        "tags": tags[]->,
        description,
        _createdAt
      }`
  );
  return post;
}

export async function getPostsByTag(tag: string) {
  const posts =
    await client.fetch(`*[_type == "post" && "${tag}" in tags[]->slug.current]{
        _id,
        title,
        slug,
        "tags": tags[]->,
        description,
        createdAt
  } | order(createdAt desc)`);
  return posts;
}

export async function getTags() {
  const tags = await client.fetch(`*[_type == "tag"]`);
  return tags;
}
