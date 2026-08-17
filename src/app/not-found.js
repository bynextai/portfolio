import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Page Not Found | Bynext AI",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-white py-20">
      <Container className="flex flex-col items-center text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-brand-blue">
          404 Error
        </span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-brand-navy sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mt-4 max-w-md text-base text-slate-600">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have
          been moved. Let&rsquo;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/">Back to Home</Button>
          <Button href="/contact" variant="secondary" icon={false}>
            Contact Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
