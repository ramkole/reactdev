"use client";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "../lib/icons";
import logo from "../../public/logo.png";
import Image from "next/image";
const HeaderHero = () => {
  return (
    <section className="w-full py-12 ">
      <div className="container px-4 md:px-6">
        <div className="grid max-w-5xl mx-auto items-center gap-6 lg:gap-12">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                rum_gham
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Hi, I'm Ram{" "}
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                I'm a passionate JavaScript developer. I love creating beautiful
                and functional web applications. Over the past 8 years, I have
                deeply engaged with the dynamic realm of front-end development,
                with a central emphasis on React.
              </p>
              <div className="flex gap-4">
                <a
                  href="/ram_kole_resume.pdf"
                  download
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                >
                  Download CV
                </a>
                <div className="flex gap-2">
                  <Link
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    href="#"
                  >
                    <TwitterIcon className="h-6 w-6" />
                  </Link>
                  <Link
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    href="https://www.linkedin.com/in/ram-kole-web/"
                  >
                    <LinkedinIcon className="h-6 w-6" />
                  </Link>
                  <Link
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    href="https://github.com/ramkole"
                  >
                    <GithubIcon className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
            <Image
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center lg:order-last"
              src={logo}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderHero;
