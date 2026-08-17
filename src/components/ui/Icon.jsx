import * as icons from "lucide-react";

// Central icon resolver so data files can reference icons by string name
// (keeps data/*.js JSON-serializable and free of JSX/component imports).
export default function Icon({ name, className = "h-5 w-5", ...props }) {
  const LucideIcon = icons[name] || icons.Circle;
  return <LucideIcon className={className} aria-hidden="true" {...props} />;
}
