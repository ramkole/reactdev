import React from "react";
import { CardStack } from "@/components/ui/cardStack";
import { workData } from "../lib/constData";

const WorkExperience = () => {
  return (
    <section id="experience" className="w-full py-12  border-t">
      <div className="container px-4 md:px-6">
        <div className="grid max-w-5xl mx-auto items-start gap-6 lg:grid-cols-1 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Work Experience
            </div>
            <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Professional Journey
            </h2>
            <p className=" text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Here you can find details about my work experience and career
              highlights. I have worked on various projects spanning different
              industries and technologies. Feel free to explore my journey
              below.
            </p>
          </div>
          <div className="grid sm:gap-6">
            <div className="flex items-center justify-start w-full">
              <CardStack items={workData} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
