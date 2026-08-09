import type { JobState } from "../../features/jobs/Jobs";
import type { PersonalInfoState } from "../../features/personal-info/PersonalInfo";
import type { ProjectState } from "../../features/projects/Projects";
import AboutMe from "./components/AboutMe";
import Jobs from "./components/Jobs";
import Projects from "./components/Projects";

type BodyProps = {
  personalInfo: PersonalInfoState;
  jobs: JobState[];
  projects: ProjectState[];
};

export default function Body({ personalInfo, jobs, projects }: BodyProps) {
  const { name, surname, degrees } = personalInfo;
  return (
    <div className="flex flex-col gap-10 sm:gap-16">
      <AboutMe name={name} surname={surname} degrees={degrees} />
      <Jobs jobs={jobs} />
      <Projects projects={projects} />
    </div>
  );
}
