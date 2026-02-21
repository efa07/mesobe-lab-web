"use client"

import { Quote } from "lucide-react"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

const testimonials = [
  {
    quote:
      "Mesob Lab transformed my personal brand. The portfolio website they built is sleek, fast, and exactly what I needed to land my first international clients. Highly recommended for any professional!",
    name: "Hana T.",
    role: "Independent Creative",
  },
  {
    quote:
      "Working with the team at Mesob Lab was seamless. They delivered our startup\u2019s 10-page business site on time and within budget. Their attention to detail in the UI/UX is world-class.",
    name: "Dawit A.",
    role: "Tech Startup Founder",
  },
  {
    quote:
      "We needed a custom desktop application to manage our inventory, and Mesob Lab delivered a robust solution that simplified our entire workflow. A truly professional software partner.",
    name: "Samuel K.",
    role: "E-commerce Entrepreneur",
  },
]

export function Testimonials() {
  const { ref: headingRef, isVisible: headingVisible } = useAnimateOnScroll(0.15)
  const { ref: gridRef, isVisible: gridVisible } = useAnimateOnScroll(0.1)

  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div
          ref={headingRef}
          className={`max-w-2xl mx-auto text-center mb-16 transition-all duration-700 ${headingVisible ? "animate-fade-up" : "opacity-0"}`}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary drop-shadow-[0_0_8px_oklch(0.75_0.18_55/0.4)] mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Real feedback from startup founders and independent professionals we have worked with.
          </p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.name}
              className={`group relative rounded-2xl border border-primary/10 bg-card/40 backdrop-blur-xl p-8 flex flex-col hover:border-primary/25 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 ${
                gridVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: gridVisible ? `${i * 150}ms` : "0ms" }}
            >
              {/* Glass highlight on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                aria-hidden="true"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.75 0.18 55 / 0.05) 0%, transparent 50%)",
                }}
              />
              <div className="relative flex flex-col flex-1">
                <Quote className="size-8 text-primary/30 mb-4 drop-shadow-[0_0_6px_oklch(0.75_0.18_55/0.3)]" />
                <blockquote className="text-foreground/90 leading-relaxed flex-1">
                  {`"${testimonial.quote}"`}
                </blockquote>
                <div className="mt-6 pt-6 border-t border-primary/10">
                  <p className="font-semibold text-sm text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-primary/70">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
