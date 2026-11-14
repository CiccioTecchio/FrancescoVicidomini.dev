import type { JobState } from "../../features/jobs/Jobs";
import {
  aboutMeCaption,
  type PersonalInfoState,
} from "../../features/personal-info/PersonalInfo";
import type { ProjectState } from "../../features/projects/Projects";
import AboutMe from "./components/AboutMe";
import Jobs from "./components/Jobs";
import Projects from "./components/Projects";
type BodyProps = {
  aboutMeCaption: string[];
  jobs: JobState[];
  workProjects: ProjectState[];
  personalProjects: ProjectState[];
  universityProjects: ProjectState[];
};

export default function Body({
  aboutMeCaption,
  jobs,
  workProjects,
  personalProjects,
  universityProjects,
}: BodyProps) {
  return (
    <div className="flex flex-col gap-10 sm:gap-16">
      <AboutMe aboutMeCaption={aboutMeCaption} />
      <Jobs jobs={jobs} />
      <Projects
        workProjects={workProjects}
        personalProjects={personalProjects}
        universityProjects={universityProjects}
      />
    </div>
  );
}
