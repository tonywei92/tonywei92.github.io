import tonysongImg from "@/assets/tony-portrait.png";
export default function AboutMe() {
  return (
    <div className="py-24 flex items-center justify-center px-6">
      <div className="max-w-2xl w-full">
        <h2 className="text-2xl font-bold mb-16 text-center">About Me.</h2>
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex justify-center mb-4">
            <div>
              <img
                src={tonysongImg.src}
                alt="Tony Song's portrait"
                className="w-32 md:w-[42rem]"
              />
            </div>
          </div>
          <div className="space-y-6 text-zinc-700 dark:text-zinc-400">
            <p>
              Hi there! I'm{" "}
              <span className="font-semibold">Tony Soekirman</span> but I
              usually go by <span className="font-semibold">Tony Song</span>{" "}
              professionaly, I'm a passionate full-stack developer with over a
              decade of experience in backend, frontend, and cloud technologies.
              I love building scalable applications and have a genuine interest
              in infrastructure and DevOps. Over the years, I've had the
              opportunity to work on a variety of projects across different
              industries, from e-commerce to SaaS products, where I've been able
              to develop my skills in PHP, Golang, JavaScript/TypeScript, and
              Python.
            </p>
            <p>
              I've been fortunate to lead teams as a CTO at MetaPals, where I
              helped design a game engine solutions for chromium browsers. My
              enthusiasm for building goes beyond just coding—I enjoy exploring
              new tools and frameworks, which has inspired me to create custom
              Laravel packages and delve into Kubernetes. Lately, I've been
              working on a Golang project to monitor CPU usage across multiple
              platforms, blending my interests in system-level programming and
              distributed architecture.
            </p>
            <div>
              <h4
                id="my-current-focus"
                className="font-semibold text-zinc-800 dark:text-zinc-300 mb-2"
              >
                My Current Focus
              </h4>
              <p>
                At the moment, I'm working on a personal blog and portfolio to
                share my projects, contributions to open-source, and some of my
                tech experiments. I'm also diving deeper into Kubernetes in
                combination with RHEL. It's been a challenging but rewarding
                learning experience. Also, I'm writing a detailed article on my
                experience in tech, I often prefer using a real-world case study
                to explain the technology so it's easier to understand.
              </p>
            </div>
            <div>
              <h4
                id="my-expertise"
                className="font-semibold text-zinc-800 dark:text-zinc-300 mb-2"
              >
                My Expertise
              </h4>
              <ul>
                <li>
                  <span className="font-semibold">Backend Development</span>:
                  PHP (Laravel), Golang, Node.js, Python, Java
                </li>
                <li>
                  <span className="font-semibold">Frontend Development</span>:
                  React, Vue.js, HTML/CSS, Tailwind
                </li>
                <li>
                  <span className="font-semibold">Cloud Platforms</span>: AWS,
                  Google Cloud, Azure
                </li>
                <li>
                  <span className="font-semibold">
                    DevOps and Infrastructure
                  </span>
                  : Kubernetes, Docker, Redis, Prometheus, Grafana
                </li>
                <li>
                  <span className="font-semibold">
                    Monitoring &amp; Performance
                  </span>
                  : Grafana, Caddy, Node Exporter
                </li>
                <li>
                  <span className="font-semibold">
                    Task Management &amp; AI Tools
                  </span>
                  : Zentime (My Task Management SaaS)
                </li>
              </ul>
            </div>
            <div>
              <h4
                id="achievements"
                className="font-semibold text-zinc-800 dark:text-zinc-300 mb-2"
              >
                Achievements
              </h4>
              <ul>
                <li>
                  Helped develop <strong>motionpanel-laravel</strong>, a Laravel
                  package for monitoring application performance, integrated
                  with Prometheus and Grafana.
                </li>
                <li>
                  Created <code>cpumon</code> & <code>memmon</code>, a
                  cross-platform node monitoring tool built in Golang, optimized
                  for multiple architectures including Windows, Linux, and Mac.
                </li>
                <li>
                  Served as CTO at <strong>MetaPals</strong>, where I
                  contributed to building systems that support a highly scalable
                  and data-driven platform for the game product.
                </li>
              </ul>
            </div>
            <div>
              <h4
                id="what-i-m-passionate-about"
                className="font-semibold text-zinc-800 dark:text-zinc-300 mb-2"
              >
                What I'm Passionate About
              </h4>
              <p>
                When I'm not coding, I enjoy learning new technologies,
                enhancing my Rust development skills, or working on writing
                deep-dive tech articles. These fun activity often spark my
                creativity and help me find innovative solutions to technical
                challenges.
              </p>
            </div>

            <div>
              <h4
                id="let-s-connect"
                className="font-semibold text-zinc-800 dark:text-zinc-300 mb-2"
              >
                Let's Connect
              </h4>
              <p>
                I'd love to connect and chat about new opportunities,
                collaborations, or just share our mutual love for technology.
                Feel free to explore my projects or reach out to me via{" "}
                <a
                  href="https://www.linkedin.com/in/tonysoekirman/"
                  target="_blank"
                  className="underline text-blue-500"
                >
                  LinkedIn
                </a>{" "}
                or{" "}
                <a
                  href="https://x.com/tonysong"
                  target="_blank"
                  className="underline text-blue-500"
                >
                  Twitter
                </a>
                . Looking forward to connecting!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
