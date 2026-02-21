"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Mail, Send } from "lucide-react"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const { ref: sectionRef, isVisible } = useAnimateOnScroll(0.1)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <div ref={sectionRef} className="mx-auto max-w-6xl px-6">
        <div className={`grid md:grid-cols-2 gap-16 items-start transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-primary drop-shadow-[0_0_8px_oklch(0.75_0.18_55/0.4)] mb-3">
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              {"Let's Build Something Great"}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Ready to start your next project? Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="mt-8 flex items-center gap-3 text-muted-foreground">
              <div className="flex items-center justify-center size-10 rounded-xl bg-primary/10 text-primary">
                <Mail className="size-5" />
              </div>
              <span className="text-sm">efatariku07@gmail.com</span>
            </div>
          </div>

          <div className="relative rounded-2xl border border-primary/10 bg-card/40 backdrop-blur-xl p-8 hover:border-primary/20 transition-all duration-300">
            {/* Glass highlight */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.75 0.18 55 / 0.04) 0%, transparent 50%)",
              }}
            />

            <div className="relative">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex items-center justify-center size-14 rounded-full bg-primary/10 text-primary mb-4 animate-glow-pulse">
                    <Send className="size-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {"We'll get back to you within 24 hours."}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      required
                      className="bg-background/50 border-primary/10 focus:border-primary/30 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="bg-background/50 border-primary/10 focus:border-primary/30 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project..."
                      rows={4}
                      required
                      className="bg-background/50 border-primary/10 focus:border-primary/30 transition-colors"
                    />
                  </div>

                  <Button type="submit" className="w-full gap-2 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all duration-300">
                    Send Message
                    <ArrowRight className="size-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
