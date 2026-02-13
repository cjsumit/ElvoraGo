import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageCircle, Send, CheckCircle2 } from "lucide-react";
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
  const [success, setSuccess] = useState(false);

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

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to send");
      }

      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
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
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              <Textarea
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />

              <div className="relative">
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={loading || success}
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send size={18} />
                </Button>

                {success && (
                  <div className="absolute inset-0 flex items-center justify-center bg-green-500 text-white rounded-lg animate-fade-in">
                    <CheckCircle2 className="mr-2 animate-bounce" size={20} />
                    Message Sent Successfully
                  </div>
                )}
              </div>
            </form>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="flex flex-col justify-center h-full space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Get in Touch</h3>
                <p>We respond within 24 hours.</p>
              </div>

              <a href="mailto:hello@techstarter.com">
                <Mail size={20} /> hello@techstarter.com
              </a>

              <a href="tel:+919876543210">
                <Phone size={20} /> +91 98765 43210
              </a>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={20} /> WhatsApp
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
