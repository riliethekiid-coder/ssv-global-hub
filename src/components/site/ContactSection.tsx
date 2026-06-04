import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, Mail, Phone, MapPin } from "lucide-react";

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(120),
  email: z.string().trim().email("Enter a valid email").max(200),
  phone: z.string().trim().min(7, "Enter a valid phone").max(30),
  inquiry: z.string().min(1, "Select an inquiry"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
});

export function ContactSection() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    inquiry: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Message received", {
        description: "A member of the SSV Group will respond within 24 hours.",
      });
      setForm({ fullName: "", email: "", phone: "", inquiry: "", message: "" });
    }, 700);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Engage</div>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl text-foreground text-balance">
            Connect With <span className="italic text-accent">Our Group.</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">
            Whether you require valuation, real estate advisory, or protective services,
            our team will route your enquiry to the right specialist.
          </p>

          <div className="mt-10 space-y-5">
            {[
              { icon: MapPin, label: "Headquarters", value: "Centage Plaza, 14, Allen Avenue, Ikeja, Lagos" },
              { icon: Phone, label: "Direct Lines", value: "0817 114 7744 · 0803 305 7313" },
              { icon: Mail, label: "Group Email", value: "feolorunda@gmail.com" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-sm bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                  <item.icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{item.label}</div>
                  <div className="text-foreground mt-1">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={submit}
          className="lg:col-span-7 rounded-2xl border border-border bg-card p-7 lg:p-10 shadow-xl"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                placeholder="John Adekunle"
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+234 ..."
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label>Inquiry Regarding</Label>
              <Select
                value={form.inquiry}
                onValueChange={(v) => setForm({ ...form, inquiry: v })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select subsidiary" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="felix">Felix Olorunda & Co — Valuation</SelectItem>
                  <SelectItem value="concerns">SSV Concerns Ventures — Real Estate</SelectItem>
                  <SelectItem value="protection">SSV Protection Services — Security</SelectItem>
                  <SelectItem value="group">General Group Enquiry</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-5 space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your project, asset, or security requirement…"
              rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="mt-7 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-sm font-medium hover:bg-primary/90 transition disabled:opacity-60"
          >
            {submitting ? "Sending…" : (<>Send Enquiry <Send className="h-4 w-4" /></>)}
          </button>
          <p className="mt-4 text-xs text-muted-foreground">
            By submitting, you agree to be contacted by the SSV Group regarding your enquiry.
          </p>
        </form>
      </div>
    </section>
  );
}
