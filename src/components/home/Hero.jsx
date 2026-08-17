import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const nodes = [
  { cx: 60, cy: 60 }, { cx: 190, cy: 40 }, { cx: 300, cy: 100 },
  { cx: 110, cy: 150 }, { cx: 250, cy: 190 }, { cx: 50, cy: 240 },
  { cx: 340, cy: 250 }, { cx: 180, cy: 280 },
];

const edges = [
  [0, 1], [1, 2], [0, 3], [1, 3], [3, 4], [2, 4],
  [3, 5], [4, 7], [5, 7], [4, 6],
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-14 pb-16 sm:pt-20 sm:pb-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-blue/5 px-3 py-1 text-xs font-semibold text-brand-blue">
              Web &bull; Mobile &bull; Software &bull; AI
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-brand-navy sm:text-5xl lg:text-[3.25rem]">
              Build. Innovate.{" "}
              <span className="text-brand-blue">Grow with Bynext AI.</span>
            </h1>
            <p className="mt-5 text-lg font-medium text-slate-700">
              Web, Mobile, Software &amp; AI Solutions for Modern Businesses.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
              Bynext AI helps businesses transform ideas into powerful web
              applications, mobile apps, software solutions and AI-powered
              products.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">Start Your Project</Button>
              <Button href="/services" variant="secondary" icon={false}>
                Explore Services
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-brand-navy via-[#0f1533] to-brand-blue-dark p-6 shadow-xl sm:p-8">
              <svg
                viewBox="0 0 400 320"
                className="h-64 w-full sm:h-80"
                role="img"
                aria-label="Illustration of a connected technology network"
              >
                <g stroke="#60A5FA" strokeOpacity="0.5" strokeWidth="1.2">
                  {edges.map(([a, b], i) => (
                    <line
                      key={i}
                      x1={nodes[a].cx}
                      y1={nodes[a].cy}
                      x2={nodes[b].cx}
                      y2={nodes[b].cy}
                    />
                  ))}
                </g>
                {nodes.map((node, i) => (
                  <circle
                    key={i}
                    cx={node.cx}
                    cy={node.cy}
                    r={i % 3 === 0 ? 6 : 4}
                    fill={i % 3 === 0 ? "#2563EB" : "#93C5FD"}
                  />
                ))}
              </svg>
              <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-white/10 pt-4">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white">
                  AI-Powered
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white">
                  Scalable
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
