import { useState, useEffect, useRef } from "react";
import anime from "animejs";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, Send, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  company: z.string().min(1, "Company name is required").max(100),
  email: z.string().email("Please enter a valid email address").max(255),
  phone: z.string().optional(),
  subject: z.string().min(1, "Please select a subject").max(100),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy",
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const faqs = [
  {
    question: "How quickly can I expect a response?",
    answer:
      "We aim to respond to all inquiries within 24 business hours. For urgent matters, please indicate this in your message subject.",
  },
  {
    question: "What information should I include in my inquiry?",
    answer:
      "Please provide as much context as possible about your project or requirements. This helps us connect you with the right team and provide a more relevant response.",
  },
  {
    question: "Do you offer free consultations?",
    answer:
      "Yes, we offer a complimentary initial consultation to understand your needs and discuss how we might help. This consultation is typically 30-60 minutes.",
  },
  {
    question: "What regions do you serve?",
    answer:
      "While headquartered in Singapore, we serve clients across the Asia-Pacific region and can support global projects through our partner network.",
  },
  {
    question: "How do you handle pricing?",
    answer:
      "Pricing depends on project scope, complexity, and engagement model. After our initial discussion, we'll provide a detailed proposal with transparent pricing.",
  },
];

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const containerRef = useRef(null);

  useEffect(() => {
    anime({
      targets: '.anime-element',
      translateY: [50, 0],
      opacity: [0, 1],
      scale: [0.95, 1],
      delay: anime.stagger(100, { start: 200 }),
      easing: 'easeOutElastic(1, .8)',
      duration: 1500
    });
    
    anime({
      targets: '.anime-glow',
      textShadow: [
        '0px 0px 0px rgba(0, 255, 255, 0)',
        '0px 0px 20px rgba(0, 255, 255, 0.6)'
      ],
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
      duration: 2000
    });
  }, []);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      consent: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero py-20 lg:py-28" ref={containerRef}>
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="anime-element text-sm font-semibold uppercase tracking-wider text-accent inline-block">Contact Us</span>
            <h1 className="anime-element anime-glow mt-2 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Let's Start a Conversation
            </h1>
            <p className="anime-element mt-4 text-lg text-white/80">
              Have a project in mind? We'd love to hear about it. Reach out and we'll respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="font-heading text-2xl font-bold text-foreground">Get in Touch</h2>
              <p className="mt-4 text-muted-foreground">We're here to help. Reach out through any of these channels.</p>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Office</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      8 Burn Road, #04-04
                      <br />
                      Trivex
                      <br />
                      Singapore 369977
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a
                      href="mailto:info@evisionsys.com"
                      className="mt-1 block text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      info@evisionsys.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <a
                      href="tel:+16269359995"
                      className="mt-1 block text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      +1 6269359995
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Business Hours</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Monday - Friday
                      <br />
                      9:00 AM - 6:00 PM SGT
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 rounded-lg overflow-hidden border border-border">
                <iframe
                  title="E Vision System Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.782!2d103.858!3d1.312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19a7e8d1f3a5%3A0x1234567890abcdef!2sTrivex%2C%208%20Burn%20Rd%2C%20Singapore%20369977!5e0!3m2!1sen!2ssg!4v1700000000000!5m2!1sen!2ssg"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="rounded-lg border border-border bg-card p-6 lg:p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                      <CheckCircle className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="mt-6 font-heading text-2xl font-bold text-foreground">Thank You!</h3>
                    <p className="mt-2 text-muted-foreground">
                      Your message has been received. We'll get back to you within 24 hours.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-6"
                      onClick={() => {
                        setIsSubmitted(false);
                        form.reset();
                      }}
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="John Smith" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company *</FormLabel>
                              <FormControl>
                                <Input placeholder="Acme Corporation" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid gap-6 sm:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john@company.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone (Optional)</FormLabel>
                              <FormControl>
                                <Input type="tel" placeholder="+65 9123 4567" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject *</FormLabel>
                            <FormControl>
                              <Input placeholder="How can we help you?" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your project, requirements, or questions..."
                                className="min-h-[150px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="consent"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="text-sm font-normal text-muted-foreground">
                                I agree to the{" "}
                                <a href="/privacy-policy" className="text-accent hover:underline">
                                  Privacy Policy
                                </a>{" "}
                                and consent to being contacted regarding my inquiry.
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        variant="accent"
                        size="lg"
                        className="w-full sm:w-auto"
                        disabled={form.formState.isSubmitting}
                      >
                        {form.formState.isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <h2 className="text-center font-heading text-2xl font-bold text-foreground sm:text-3xl">
            Frequently Asked Questions
          </h2>

          <div className="mt-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="rounded-lg border border-border bg-card px-6"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </Layout>
  );
}
