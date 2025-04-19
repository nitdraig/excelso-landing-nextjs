import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactView() {
  return (
    <div className="flex flex-col">
      <section className="w-full pb-14">
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
              <form className="space-y-4">
                <div className="space-y-2">
                  <Input placeholder="Name" />
                </div>
                <div className="space-y-2">
                  <Input type="email" placeholder="Email" />
                </div>
                <div className="space-y-2">
                  <Textarea placeholder="Message" className="min-h-[150px]" />
                </div>
                <Button
                  type="submit"
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
