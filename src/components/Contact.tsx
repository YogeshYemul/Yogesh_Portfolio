import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, MapPin, Loader2 } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    setLoading(true);
    // Simulate send
    await new Promise((r) => setTimeout(r, 1500));
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
    setLoading(false);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-primary mb-2 tracking-widest uppercase">Get In Touch</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-12">
            Let's <span className="text-primary">Connect</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-muted-foreground font-body text-base leading-relaxed mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Feel free to reach out!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Mail size={18} className="text-primary" />
                </div>
                <a href="mailto:yogeshyemul2006@gmail.com" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                  yogeshyemul2006@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin size={18} className="text-primary" />
                </div>
                <span className="font-body text-sm text-muted-foreground">India 🇮🇳</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-5"
          >
            {[
              { key: "name", label: "Name", type: "text" },
              { key: "email", label: "Email", type: "email" },
            ].map(({ key, label, type }) => (
              <div key={key}>
                <label htmlFor={key} className="block text-sm font-body font-medium text-foreground mb-1.5">
                  {label}
                </label>
                <input
                  id={key}
                  type={type}
                  value={form[key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder={`Your ${label.toLowerCase()}`}
                  maxLength={key === "email" ? 255 : 100}
                  required
                />
              </div>
            ))}
            <div>
              <label htmlFor="message" className="block text-sm font-body font-medium text-foreground mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                placeholder="Your message..."
                maxLength={1000}
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-primary text-primary-foreground font-body font-semibold rounded-xl hover:bg-accent transition-colors disabled:opacity-50"
            >
              {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
