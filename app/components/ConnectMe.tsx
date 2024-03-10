import React from "react";
import { LocateIcon, MailIcon, PhoneIcon } from "../lib/icons";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

const ConnectMe = () => {
  return (
    <section id="connect" className="border-t">
      <Drawer>
        <DrawerTrigger>
          <Button>Connect with me</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>
              <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Let&apos;s Stay Connected
              </h2>
            </DrawerTitle>
            <DrawerDescription>
              <div className="container px-4 md:px-6">
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Feel free to reach out to me through the following channels.
                  I&apos;m always open to new opportunities and collaborations.
                </p>
              </div>
              <div className="grid gap-4 sm:gap-6 mt-6">
                <div className="inline-flex items-center gap-4">
                  <MailIcon className="h-6 w-6" />
                  <p>Email: ram_kole@yahoo.com</p>
                </div>
                <div className="inline-flex items-center gap-4">
                  <PhoneIcon className="h-6 w-6" />
                  <p>Phone: +91 8484802019</p>
                </div>
                <div className="inline-flex items-center gap-4">
                  <LocateIcon className="h-6 w-6" />
                  <p>Location: Maharstra, India</p>
                </div>
              </div>
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <div className="grid max-w-5xl mx-auto items-start gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4"></div>
      </div>
    </section>
  );
};

export default ConnectMe;
