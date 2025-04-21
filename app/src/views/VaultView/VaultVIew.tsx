"use client";

import VaultHero from "./components/VaultHero";
import VaultServices from "./components/VaultServices";
import VaultProjects from "./components/VaultProjects";
import VaultCTA from "./components/VaultCTA";

export default function VaultView() {
  return (
    <div className="flex flex-col">
      <VaultHero />
      <VaultServices />
      <VaultProjects />
      <VaultCTA />
    </div>
  );
}
