import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="bg-brand-blue py-16 sm:py-20">
      <Container className="text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Have an Idea? Let&rsquo;s Build It.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/85 sm:text-lg">
          Tell us what you want to build and our team will help you turn your
          idea into a reliable digital solution.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/contact" variant="dark">
            Start Your Project
          </Button>
          <Button href="/contact" variant="outlineWhite" icon={false}>
            Contact Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
