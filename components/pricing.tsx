"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

const tiers = [
  {
    name: "Basic Website",
    price: "10,000",
    description: "Perfect for personal portfolios and simple landing pages.",
    features: [
      "1-3 Essential Pages",
      "Personal Portfolio Focus",
      "Mobile-Responsive Design",
      "Social Media Integration",
      "1 Month Free Maintenance",
    ],
    popular: false,
  },
  {
    name: "Startup Package",
    price: "30,000",
    description: "Comprehensive business sites up to 10 pages with SEO optimization.",
    features: [
      "Up to 10 Custom Pages",
      "SEO & Performance Tuning",
      "Content Management (CMS)",
      "Priority Email Support",
      "3 Months Technical Support",
    ],
    popular: true,
  },
  {
    name: "Web Apps & Software",
    price: "50,000+",
    description: "Advanced solutions including e-commerce platforms and custom software.",
    features: [
      "Full E-commerce Integration",
      "Custom Dashboard & Database",
      "Advanced Desktop Software",
      "Secure Payment Gateways",
      "Dedicated Project Manager",
    ],
    popular: false,
  },
]

export function Pricing() {
  const { ref: headingRef, isVisible: headingVisible } = useAnimateOnScroll(0.15)
  const { ref: cardsRef, isVisible: cardsVisible } = useAnimateOnScroll(0.1)

  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div
          ref={headingRef}
          className={`max-w-2xl mx-auto text-center mb-16 transition-all duration-700 ${headingVisible ? "animate-fade-up" : "opacity-0"}`}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary drop-shadow-[0_0_8px_oklch(0.75_0.18_55/0.4)] mb-3">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Transparent Pricing, Real Value
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Choose the plan that fits your needs. All prices are in Ethiopian Birr (ETB).
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`group relative rounded-2xl border bg-card/40 backdrop-blur-xl p-8 flex flex-col transition-all duration-700 hover:shadow-xl hover:shadow-primary/5 ${
                tier.popular
                  ? "border-primary/40 shadow-lg shadow-primary/10 animate-glow-pulse"
                  : "border-primary/10 hover:border-primary/25"
              } ${
                cardsVisible
                  ? "animate-scale-in"
                  : "opacity-0"
              }`}
              style={{ animationDelay: cardsVisible ? `${i * 150}ms` : "0ms" }}
            >
              {/* Glass highlight */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                aria-hidden="true"
                style={{
                  background: tier.popular
                    ? "linear-gradient(135deg, oklch(0.75 0.18 55 / 0.08) 0%, transparent 60%)"
                    : "linear-gradient(135deg, oklch(0.75 0.18 55 / 0.03) 0%, transparent 60%)",
                }}
              />

              <div className="relative">
                {tier.popular && (
                  <Badge className="absolute -top-12 left-0 bg-primary text-primary-foreground shadow-lg shadow-primary/30">
                    Most Popular
                  </Badge>
                )}

                <h3 className="text-lg font-semibold text-foreground">{tier.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {tier.description}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className={`text-4xl font-bold tracking-tight ${tier.popular ? "text-primary drop-shadow-[0_0_12px_oklch(0.75_0.18_55/0.4)]" : "text-foreground"}`}>
                    {tier.price}
                  </span>
                  <span className="text-sm text-muted-foreground ml-1">ETB</span>
                </div>

                <ul className="mt-8 flex flex-col gap-4 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-foreground">
                      <Check className="size-4 text-primary mt-0.5 shrink-0 drop-shadow-[0_0_4px_oklch(0.75_0.18_55/0.4)]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`mt-8 w-full transition-all duration-300 ${
                    tier.popular
                      ? "shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35"
                      : "border-primary/20 text-foreground hover:bg-primary/10 hover:border-primary/40"
                  }`}
                  variant={tier.popular ? "default" : "outline"}
                >
                  <a href="#contact">Get Started</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
