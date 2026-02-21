"use client"

import { Monitor, Globe } from "lucide-react"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

const services = [
  {
    icon: Monitor,
    title: "Custom Desktop Application Development",
    description:
      "We build robust, high-performance desktop applications designed to streamline your workflows. From inventory management to specialized business tools, our solutions are tailored to solve real problems.",
    features: [
      "Cross-platform compatibility",
      "Intuitive user interfaces",
      "Offline-first architecture",
      "Secure data management",
    ],
  },
  {
    icon: Globe,
    title: "Responsive Website Design",
    description:
      "Professional, mobile-responsive websites crafted for portfolios, startups, and small businesses. Every site we build is optimized for speed, SEO, and a seamless user experience across all devices.",
    features: [
      "Mobile-first design",
      "SEO optimization",
      "Performance tuning",
      "Content management systems",
    ],
  },
]

export function Services() {
  const { ref: headingRef, isVisible: headingVisible } = useAnimateOnScroll(0.15)
  const { ref: card1Ref, isVisible: card1Visible } = useAnimateOnScroll(0.1)
  const { ref: card2Ref, isVisible: card2Visible } = useAnimateOnScroll(0.1)

  const cardRefs = [card1Ref, card2Ref]
  const cardVisibles = [card1Visible, card2Visible]

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div
          ref={headingRef}
          className={`max-w-2xl mb-16 transition-all duration-700 ${headingVisible ? "animate-fade-up" : "opacity-0"}`}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary drop-shadow-[0_0_8px_oklch(0.75_0.18_55/0.4)] mb-3">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Our Core Services
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Two pillars of expertise that power your digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              ref={cardRefs[i]}
              className={`group relative rounded-2xl border border-primary/10 bg-card/40 backdrop-blur-xl p-8 md:p-10 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 ${
                cardVisibles[i]
                  ? i === 0
                    ? "animate-slide-right"
                    : "animate-slide-left"
                  : "opacity-0"
              }`}
            >
              {/* Glass highlight */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                aria-hidden="true"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.75 0.18 55 / 0.05) 0%, transparent 50%)",
                }}
              />
              <div className="relative">
                <div className="flex items-center justify-center size-12 rounded-xl bg-primary/10 text-primary mb-6 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                  <service.icon className="size-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="flex flex-col gap-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-foreground"
                    >
                      <span className="size-1.5 rounded-full bg-primary shadow-[0_0_6px_oklch(0.75_0.18_55/0.5)] shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
