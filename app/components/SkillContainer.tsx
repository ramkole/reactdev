import React from "react";
import CardContainer from "./CardContainer";

interface Props {
  data: any;
  skillTitle: string;
}

const SkillContainer = ({ skillTitle, data }: Props) => {
  return (
    <div className="grid bg-gray-50 p-3 rounded-xl">
      <p className="">{skillTitle}</p>
      <ul className="flex flex-wrap  text-xs gap-2 p-2 text-zinc-950">
        {data?.skills.map((skill: string[]) => (
          <CardContainer key={data.id}>
            <li className="bg-white borderBlack rounded-xl ">{skill}</li>
          </CardContainer>
        ))}
      </ul>
    </div>
  );
};

export default SkillContainer;
