import Image from "next/image";
import Link from "next/link";

export default function Logo({ dark = false }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0 group" aria-label="Bynext AI home">
      <Image
        src="/logo.svg"
        alt="Bynext AI Logo"
        width={36}
        height={36}
        priority
        className="h-9 w-9 transition-transform duration-300 group-hover:scale-105"
      />
      <span
        className={`text-xl font-bold tracking-tight ${dark ? "text-white" : "text-brand-navy"}`}
      >
        Bynext<span className="text-brand-blue"> AI</span>
      </span>
    </Link>
  );
}

