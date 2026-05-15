import type { ServicePageContent } from "@/types";

export function ServiceProcess({ service }: { service: ServicePageContent }) {
  return (
    <section className="section-padding dark-section bg-brand-black text-white">
      <div className="container-custom">
        <h2 className="mb-12 text-center text-3xl font-bold">How It Works</h2>
        <div className="grid gap-8 md:grid-cols-4">
          {service.process.map((step) => (
            <div key={step.step} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue text-lg font-bold">{step.step}</div>
              <h3 className="mb-2 font-semibold">{step.title}</h3>
              <p className="text-sm text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
