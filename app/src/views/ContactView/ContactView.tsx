"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { z } from "zod";

// 🧪 Schema de validación
const contactSchema = z.object({
  fullname: z.string().min(1, "Full name is required"),
  email: z.string().email("Please enter a valid email"),

  message: z.string().min(1, "Message is required"),
});

export default function ContactView() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",

    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [serverMsg, setServerMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");
    setServerMsg("");

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as string;
        newErrors[field] = issue.message;
      });
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStatus("sending");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json = await res.json();

      if (!res.ok) throw new Error(json.error || "Unknown error");

      setStatus("success");
      setServerMsg(json.message || "Message sent successfully.");
      setFormData({ fullname: "", email: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setServerMsg(err.message || "Something went wrong.");
    }
  };

  return (
    <div className="flex flex-col">
      <section className="w-full pb-14 pt-10">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Contact Us
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  We'd love to hear from you. Reach out for collaborations,
                  inquiries, or more information.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Get in Touch</h2>
                <p className="text-muted-foreground">
                  Fill out the form and our team will get back to you as soon as
                  possible.
                </p>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className="space-y-1">
                  <Input
                    id="fullname"
                    name="fullname"
                    type="text"
                    placeholder="Full Name"
                    value={formData.fullname}
                    onChange={handleChange}
                  />
                  {errors.fullname && (
                    <p className="text-sm text-red-500">{errors.fullname}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[150px]"
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                {/* Status Feedback */}
                {status === "sending" && (
                  <p className="text-blue-600">Sending message...</p>
                )}
                {status === "success" && (
                  <p className="text-green-600">{serverMsg}</p>
                )}
                {status === "error" && (
                  <p className="text-red-600">Error: {serverMsg}</p>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-foreground text-background"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
