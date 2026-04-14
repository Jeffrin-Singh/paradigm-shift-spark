import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { MapPin, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const offices = [
  { city: "Sydney", address: "Level 15 Eclipse Tower, 60 Station Street, Parramatta NSW 2150" },
  { city: "Singapore", address: "Level 39 Marina Bay Financial Centre Tower 2, 10 Marina Boulevard Singapore, 018983" },
  { city: "Dubai", address: "Level 41, Emirates Towers, Sheikh Zayed Road, Dubai" },
  { city: "Mumbai", address: "Level 8, Vibgyor Towers C62, G Block, Bandra Kurla Complex, Mumbai, 400 098" },
];

const ContactPage = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: "Message sent!", description: "One of our friendly staff will reach out to you shortly." });
  };

  return (
    <Layout>
      <PageHero title="Contact Us" subtitle="Get in Touch" description="We'd love to hear from you. Reach out to discuss how we can help." />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Thank you for your interest in our services. Please provide the following information to help us serve you better. This information will enable us to route your request to the appropriate person. You should receive a response within one to two business days.
              </p>

              {submitted ? (
                <div className="bg-primary/5 rounded-xl p-8 text-center border border-primary/10">
                  <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">Thank you for reaching out to us! One of our friendly staff will reach out to you shortly!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                      <Input id="email" type="email" placeholder="your@email.com" required />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                      <Input id="phone" placeholder="Your phone number" />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-foreground mb-1.5">Country</label>
                      <Input id="country" placeholder="Your country" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">Subject</label>
                    <Input id="subject" placeholder="How can we help?" required />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                    <Textarea id="message" placeholder="Tell us more about your needs..." rows={5} required />
                  </div>
                  <Button type="submit" size="lg">Send Message</Button>
                </form>
              )}
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Our Global Offices</h2>
              <p className="text-muted-foreground mb-6">People Are Our Business</p>
              <div className="space-y-4">
                {offices.map(o => (
                  <div key={o.city} className="bg-card rounded-xl p-5 border border-border/50 card-elevated">
                    <div className="flex gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <h3 className="font-heading font-semibold text-foreground mb-1">{o.city}</h3>
                        <p className="text-muted-foreground text-sm">{o.address}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
