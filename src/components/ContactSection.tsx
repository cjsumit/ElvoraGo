import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const ContactSection = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (loading) return;

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      toast({
        title: "Please fill all fields",
        variant: "destructive",
      });
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      let result: any = {};
      try {
        result = await response.json();
      } catch {
        result = { message: "Server error" };
      }

      if (!response.ok) {
        throw new Error(result.message || "Failed to send message");
      }

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error: any) {
      toast({
        title: "Error sending message",
        description:
          error?.message || "Backend not running or server error.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Contact Us"
          title="Let's Build Something Amazing"
          subtitle="Get a free consultation today. We'd love to hear about your project."
        />

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Name
                </label>
                <Input
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  maxLength={100}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  maxLength={255}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  maxLength={1000}
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
                <Send size={18} />
              </Button>
            </form>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection delay={0.15}>
            <div className="flex flex-col justify-center h-full space-y-8">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Get in Touch
                </h3>
                <p className="text-muted-foreground">
                  We respond within 24 hours. Choose the channel that works best
                  for you.
                </p>
              </div>

              <div className="space-y-5">
                <a
                  href="mailto:hello@techstarter.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border shadow-card"
                >
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-medium">
                      hello@techstarter.com
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border shadow-card"
                >
                  <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Phone</div>
                    <div className="font-medium">
                      +91 98765 43210
                    </div>
                  </div>
                </a>

                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border shadow-card"
                >
                  <div className="w-12 h-12 rounded-xl bg-[hsl(142_70%_45%)] flex items-center justify-center">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      WhatsApp
                    </div>
                    <div className="font-medium">
                      Chat with us
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
