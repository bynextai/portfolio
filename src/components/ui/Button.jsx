import Link from "next/link";
import { ArrowRight } from "lucide-react";

const variants = {
  primary:
    "bg-brand-blue text-white hover:bg-brand-blue-dark shadow-sm hover:shadow-md",
  secondary:
    "bg-white text-brand-navy border border-slate-200 hover:border-brand-blue hover:text-brand-blue",
  outlineWhite:
    "bg-transparent text-white border border-white/40 hover:bg-white hover:text-brand-blue",
  dark: "bg-brand-navy text-white hover:bg-[#161d3f]",
};

export default function Button({
  href,
  children,
  variant = "primary",
  icon = true,
  className = "",
  type = "button",
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
        {icon && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
      {icon && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
    </button>
  );
}
