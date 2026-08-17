import Image from "next/image";
import Link from "next/link";

export default function Logo({ dark = false }) {
  return (
    <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Bynext AI home">
      <Image src="/logo.svg" alt="" width={32} height={32} priority />
      <span
        className={`text-lg font-bold tracking-tight ${dark ? "text-white" : "text-brand-navy"}`}
      >
        Bynext<span className="text-brand-blue"> AI</span>
      </span>
    </Link>
  );
}
