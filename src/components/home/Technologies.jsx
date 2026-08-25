"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import { technologyGroups } from "@/data/technologies";

export default function Technologies() {
  const [active, setActive] = useState(technologyGroups[0].key);

  return (
    <section className="bg-brand-navy py-20 sm:py-24">
      <Container>
        <SectionHeading
          light
          title="Technologies We Work With"
          description="A modern ecosystem across frontend, backend, data, mobile, DevOps and AI."
        />

        <div
          role="tablist"
          aria-label="Technology categories"
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {technologyGroups.map((group) => (
            <button
              key={group.key}
              role="tab"
              type="button"
              aria-selected={active === group.key}
              onClick={() => setActive(group.key)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === group.key
                  ? "bg-brand-blue text-white"
                  : "bg-white/5 text-white/70 hover:bg-white/10"
              }`}
            >
              {group.title}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {technologyGroups.map((group) => (
            <div
              key={group.key}
              role="tabpanel"
              hidden={active !== group.key}
              className="rounded-xl border border-white/10 bg-white/5 p-5 sm:col-span-2 lg:col-span-3"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-blue/20 text-brand-blue">
                  <Icon name={group.icon} />
                </span>
                <h3 className="text-base font-semibold text-white">{group.title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
