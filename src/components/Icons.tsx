import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const defaults: IconProps = {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  width: 20,
  height: 20,
  "aria-hidden": true,
};

export function DownloadIcon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="M5 20h14v-2H5v2Zm14-9h-4V3H9v8H5l7 7 7-7Z" /></svg>;
}

export function GitHubIcon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="M12 .7A11.3 11.3 0 0 0 8.4 22.8c.6.1.8-.2.8-.5v-2.2c-3.4.7-4.1-1.4-4.1-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5A11.3 11.3 0 0 0 12 .7Z" /></svg>;
}

export function LinkedInIcon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="M5.3 7.9H1.8V19h3.5V7.9ZM3.6 2.3a2 2 0 1 0 0 4.1 2 2 0 0 0 0-4.1ZM22.2 12.6c0-3.3-1.8-4.9-4.2-4.9-1.9 0-2.8 1.1-3.3 1.8V7.9h-3.5V19h3.5v-5.5c0-1.4.3-2.8 2.1-2.8 1.8 0 1.8 1.7 1.8 2.9V19h3.5l.1-6.4Z" /></svg>;
}

export function MailIcon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" /></svg>;
}

export function WorkIcon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="M4 21h16V3H4v18Zm10-16h4v2h-4V5Zm0 4h4v2h-4V9Zm0 4h4v2h-4v-2Zm0 4h4v2h-4v-2ZM6 5h6v14H6V5Zm2 2v2h2V7H8Zm0 4v2h2v-2H8Zm0 4v2h2v-2H8Z" /></svg>;
}

export function SparklesIcon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="m19 9 1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9Zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5ZM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15Z" /></svg>;
}

export function SchoolIcon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="M12 3 1 9l4 2.2V17l7 4 7-4v-5.8l2-1.1V17h2V9L12 3Zm7 6-7 3.8L5 9l7-3.8L19 9Zm-2 6.8-5 2.9-5-2.9v-3.5l5 2.7 5-2.7v3.5Z" /></svg>;
}
