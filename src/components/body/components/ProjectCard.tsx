import { GitHubIcon } from "../../Icons";

type ProjectCardProps = {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  committedBy: string;
  url?: string;
  repoUrl?: string;
};

export default function ProjectCard({
  name,
  description,
  startDate,
  endDate,
  committedBy,
  url,
  repoUrl,
}: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[1.75rem] border border-slate-300/90 bg-white shadow-[0_18px_48px_rgba(15,23,42,0.12)] ring-1 ring-slate-900/[0.03]">
      <div className="flex-1 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900">
              {url ? (
                <a href={url} target="_blank" rel="noreferrer">
                  {name}
                </a>
              ) : (
                name
              )}
            </h3>

            <p className="mt-2 text-sm font-medium uppercase tracking-[0.24em] text-slate-500">
              {startDate} - {endDate}
            </p>
          </div>

          <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-sky-700">
            {committedBy}
          </span>
        </div>

        <p className="mt-6 text-base leading-8 text-slate-600">{description}</p>
      </div>

      {repoUrl ? (
        <div className="px-6 pb-6 pt-0">
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-slate-50 no-underline transition hover:bg-slate-800 hover:text-white"
          >
            <GitHubIcon />
            Repo
          </a>
        </div>
      ) : null}
    </article>
  );
}
