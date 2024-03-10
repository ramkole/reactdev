import { Stack } from "../lib/constData";
import SkillContainer from "./SkillContainer";

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full py-12  border-t">
      <div className="container px-4 md:px-6">
        <div className="grid max-w-5xl mx-auto items-start gap-6 lg:grid-cols-1 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Tech Stack
            </div>
          </div>
          <div className="grid  lg:grid-cols-2  gap-4">
            {Stack.map((s) => (
              <SkillContainer skillTitle={s.stack} skillData={s.skills} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
