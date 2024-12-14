"use client";

import { CallToAction } from "@/components/services/CallToAction";
import { ServiceDetails } from "@/components/services/ServiceDetails";
import { ServiceHero } from "@/components/services/ServiceHero";



export default function ServicesPage() {
  return (
    <main>
      <ServiceHero/>
      <ServiceDetails />
      <CallToAction />
    </main>
  );
}
