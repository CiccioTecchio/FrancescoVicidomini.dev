type AboutMeProps = {
  aboutMeCaption: string[];
};

export default function AboutMe({ aboutMeCaption }: AboutMeProps) {
  const aboutMeText = aboutMeCaption.map((paragraph, index) => (
    <p
      key={index}
      className="mt-4 w-full text-base leading-8 text-slate-700 sm:text-lg"
    >
      {paragraph}
    </p>
  ));

  return (
    <section className="px-4 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/60 bg-white/70 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-12">
        <h2 className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-700">
          About Me
        </h2>

        {aboutMeText}
      </div>
    </section>
  );
}
