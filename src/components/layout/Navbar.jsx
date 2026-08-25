"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo";
import Button from "@/components/ui/Button";
import { navLinks } from "@/data/site";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close mobile & dropdown menus smoothly when route changes
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.dropdown ? (
              <li key={link.href} className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-brand-blue"
                      : "text-brand-navy hover:text-brand-blue"
                  }`}
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((open) => !open)}
                >
                  {link.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                {servicesOpen && (
                  <div className="absolute left-1/2 top-full mt-2 w-96 -translate-x-1/2 rounded-xl border border-slate-100 bg-white p-3 shadow-xl">
                    <ul className="grid grid-cols-1 gap-1">
                      {link.dropdown.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="block rounded-lg px-3 py-2.5 hover:bg-slate-50"
                          >
                            <span className="block text-sm font-semibold text-brand-navy">
                              {item.label}
                            </span>
                            <span className="mt-0.5 block text-xs text-slate-500">
                              {item.description}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-brand-blue"
                      : "text-brand-navy hover:text-brand-blue"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        <div className="hidden lg:block">
          <Button href="/contact" className="!px-5 !py-2.5">
            Start Your Project
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-brand-navy lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <ul className="flex flex-col gap-1 px-5 py-4">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li key={link.href}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-sm font-medium text-brand-navy"
                    aria-expanded={mobileServicesOpen}
                    onClick={() => setMobileServicesOpen((open) => !open)}
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                  {mobileServicesOpen && (
                    <ul className="ml-3 flex flex-col gap-1 border-l border-slate-100 pl-3">
                      {link.dropdown.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="block rounded-md px-3 py-2 text-sm text-slate-600 hover:text-brand-blue"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-md px-3 py-3 text-sm font-medium ${
                      isActive(link.href) ? "text-brand-blue" : "text-brand-navy"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
            <li className="mt-2">
              <Button href="/contact" className="w-full">
                Start Your Project
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
