import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const VaultCTA = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 border-t">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Elevate your organization's technological capabilities
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Partner with Excelso Vault to transform your business through
            innovative technology solutions.
          </p>
        </div>
        <div className="flex gap-4 lg:justify-end">
          <Button
            asChild
            className="inline-flex h-10 items-center justify-center rounded-md bg-foreground text-background"
          >
            <Link href="/contact">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VaultCTA;
