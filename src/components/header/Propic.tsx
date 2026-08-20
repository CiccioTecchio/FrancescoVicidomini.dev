import Image from "next/image";
import type { MyNameProps } from "../../types/MyNameProps";

export default function Propic({ name, surname }: MyNameProps) {
  return (
    <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-white/80 bg-slate-200 shadow-[0_10px_30px_rgba(15,23,42,0.12)] sm:h-16 sm:w-16">
      <Image
        src="/Propic-CV.jpg"
        alt={`${name} ${surname}`}
        width={64}
        height={64}
        priority
        sizes="(min-width: 640px) 64px, 56px"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
