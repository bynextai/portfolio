"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import { technologyGroups } from "@/data/technologies";

export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredGroups =
    activeCategory === "all"
      ? technologyGroups
      : technologyGroups.filter((g) => g.key === activeCategory);

  return (
    <section className="bg-brand-navy py-20 sm:py-24 relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          light
          title="Technologies We Work With"
          description="A modern, enterprise-ready tech stack engineered for speed, scalability, and security."
        />

        {/* Filter Tabs */}
        <div
          role="tablist"
          aria-label="Technology categories"
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          <button
            role="tab"
            type="button"
            aria-selected={activeCategory === "all"}
            onClick={() => setActiveCategory("all")}
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
              activeCategory === "all"
                ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/30"
                : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            All Stack
          </button>
          {technologyGroups.map((group) => (
            <button
              key={group.key}
              role="tab"
              type="button"
              aria-selected={activeCategory === group.key}
              onClick={() => setActiveCategory(group.key)}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                activeCategory === group.key
                  ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/30"
                  : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {group.title}
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredGroups.map((group) => (
            <div
              key={group.key}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 transition-colors transition-shadow duration-300 hover:border-brand-blue/50 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-brand-blue/10"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/20 text-brand-blue border border-brand-blue/30 transition-transform group-hover:scale-110">
                      <Icon name={group.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {group.title}
                      </h3>
                      <span className="text-[11px] font-medium text-brand-blue">
                        {group.badge}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-white/60">
                  {group.description}
                </p>

                {/* Tech List Badges */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="group/item flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/90 transition-colors hover:border-brand-blue/40 hover:bg-brand-blue/10"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                      <span className="font-medium text-white">{item.name}</span>
                      <span className="text-[10px] text-white/40 group-hover/item:text-white/60">
                        • {item.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Trust Footer */}
        <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10 text-xs font-medium text-white/70">
            <div className="flex items-center justify-center gap-2 py-2 sm:py-0">
              <Icon name="CheckCircle2" className="h-4 w-4 text-brand-blue" />
              <span>Clean Architecture & Standards</span>
            </div>
            <div className="flex items-center justify-center gap-2 py-2 sm:py-0">
              <Icon name="Rocket" className="h-4 w-4 text-brand-blue" />
              <span>Optimized Speed & SEO</span>
            </div>
            <div className="flex items-center justify-center gap-2 py-2 sm:py-0">
              <Icon name="Shield" className="h-4 w-4 text-brand-blue" />
              <span>Enterprise Reliability & Support</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
