import type { Metadata } from "next";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter, Roboto_Mono } from "next/font/google";
import { Navbar } from "@/components/ui/navbar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import bannerImg from "@/assets/banner.jpeg";
import "./globals.css";
import BackgroundAnimation from "@/components/ui/background-animation";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL!),
  title: "Tech Insights by Tony Song | AI, Cloud, and Development Tips",
  description:
    "Stay ahead in the tech world with insights on AI, Kubernetes, and web development best practices.",
  openGraph: {
    images: [bannerImg.src],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.variable, roboto_mono.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <BackgroundAnimation />
          <div className="antialiased font-sans relative z-10">
            <Navbar className="my-4 mx-6 fixed top-0 left-0 right-0" />
            {children}
            <footer className="flex justify-center px-6 py-4">
              <div className="max-w-2xl w-full space-y-4">
                <div className="flex justify-center space-x-2">
                  <Button variant="ghost" size="icon" asChild>
                    <a
                      href="https://www.linkedin.com/in/tony-song/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedInLogoIcon className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a
                      href="https://github.com/tonywei92"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubLogoIcon className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
                <p className="text-zinc-500 font-medium pb-8 text-center md:text-left">
                  &copy; {new Date().getFullYear()} Tony Song. All rights
                  reserved.
                </p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
