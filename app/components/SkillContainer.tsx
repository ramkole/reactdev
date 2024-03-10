import React from "react";
import CardContainer from "./CardContainer";

interface Props {
  skillData: string[];
  skillTitle: string;
}

const SkillContainer = ({ skillData, skillTitle }: Props) => {
  return (
    <div className="grid bg-gray-50 p-3 rounded-xl">
      <p className="">{skillTitle}</p>
      <ul className="flex flex-wrap  text-xs gap-2 p-2 text-zinc-950">
        {skillData.map((skill, index) => (
          <CardContainer>
            <li className="bg-white borderBlack rounded-xl " key={index}>
              {skill}
            </li>
          </CardContainer>
        ))}
      </ul>
    </div>
  );
};

export default SkillContainer;
