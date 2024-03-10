import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const CardContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Card
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4"
      )}
    >
      {children}
    </Card>
  );
};

export default CardContainer;
