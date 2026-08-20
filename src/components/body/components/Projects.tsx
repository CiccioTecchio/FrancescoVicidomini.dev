"use client";

import { useState } from "react";
import { SchoolIcon, SparklesIcon, WorkIcon } from "../../Icons";
import ProjectCard from "./ProjectCard";

type Project = {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  committedBy: string;
  url?: string;
  repoUrl?: string;
};

type ProjectsProps = {
  projects: Project[];
};

const stepLabels = [
  "Work projects",
  "Personal Projects",
  "University Projects",
] as const;

const stepIcons = [WorkIcon, SparklesIcon, SchoolIcon] as const;

export default function Projects({ projects }: ProjectsProps) {
  const [activeStep, setActiveStep] = useState(0);

  const workProjects: Project[] = [];
  const personalProjects: Project[] = [];
  const universityProjects: Project[] = [];

  projects.forEach((project) => {
    if (project.committedBy === "My self") {
      personalProjects.push(project);
    } else if (project.committedBy === "University") {
      universityProjects.push(project);
    } else {
      workProjects.push(project);
    }
  });

  const groupedProjects = [
    workProjects,
    personalProjects,
    universityProjects,
  ];

  return (
    <section className="px-4 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/60 bg-white/70 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-12">
        <h2 className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-700">
          Projects
        </h2>

        <div className="relative mt-8 grid grid-cols-3 gap-2" role="tablist" aria-label="Project categories">
          <div className="pointer-events-none absolute left-[16.67%] right-[16.67%] top-[18px] h-px bg-slate-200" />
          {stepLabels.map((label, index) => {
            const Icon = stepIcons[index];
            const isActive = activeStep === index;

            return (
              <button
                key={label}
                id={`projects-tab-${index}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`projects-panel-${index}`}
                onClick={() => setActiveStep(index)}
                className={`relative z-10 flex min-w-0 flex-col items-center gap-2 bg-transparent text-center text-xs font-medium transition sm:text-sm ${isActive ? "text-slate-900" : "text-slate-500 hover:text-sky-600"}`}
              >
                <span className={`inline-flex h-9 w-9 items-center justify-center rounded-full border bg-gradient-to-b shadow-[0_8px_20px_rgba(15,23,42,0.08)] transition ${isActive ? "-translate-y-px border-sky-300 bg-sky-50 text-sky-700 shadow-[0_12px_28px_rgba(14,165,233,0.18)]" : "border-slate-200 from-white to-slate-100 text-slate-500"}`}>
                  <Icon width={18} height={18} />
                </span>
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        {groupedProjects.map((projectGroup, groupIndex) => (
          <div
            key={stepLabels[groupIndex]}
            id={`projects-panel-${groupIndex}`}
            role="tabpanel"
            aria-labelledby={`projects-tab-${groupIndex}`}
            className={`mt-10 gap-6 lg:grid-cols-2 ${activeStep === groupIndex ? "grid" : "hidden"}`}
          >
            {projectGroup.map((project) => (
              <ProjectCard
                key={`${project.name}-${project.startDate}`}
                {...project}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
