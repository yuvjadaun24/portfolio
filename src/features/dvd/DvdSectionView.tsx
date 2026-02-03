"use client";

import dvd from "@/content/dvd.json";
import { DvdScreenShell } from "@/features/dvd/DvdScreenShell";
import { DvdAudioScreen } from "@/features/dvd/screens/DvdAudioScreen";
import { DvdPlayScreen } from "@/features/dvd/screens/DvdPlayScreen";
import { DvdScenesScreen } from "@/features/dvd/screens/DvdScenesScreen";
import { DvdSetupScreen } from "@/features/dvd/screens/DvdSetupScreen";
import type { MenuId } from "@/features/dvd/types";

export function DvdSectionView({
  section,
  onBack,
}: {
  section: MenuId;
  onBack: () => void;
}) {
  const title =
    section === "PLAY"
      ? dvd.about?.title
      : section === "SCENES"
        ? dvd.projects?.title
        : section === "AUDIO"
          ? dvd.skills?.title
          : dvd.contact?.title;

  return (
    <DvdScreenShell
      label={section}
      title={title}
      onBack={onBack}
      footerLeft="Esc Back"
      footerRight={
        section === "SCENES"
          ? "↑ ↓ Select • Enter Open"
          : section === "AUDIO"
            ? "↑ ↓ Track • Enter Play"
            : section === "SETUP"
              ? "↑ ↓ Select • Enter Run"
              : ""
      }
    >
      {section === "PLAY" ? <DvdPlayScreen /> : null}
      {section === "SCENES" ? <DvdScenesScreen /> : null}
      {section === "AUDIO" ? <DvdAudioScreen /> : null}
      {section === "SETUP" ? <DvdSetupScreen /> : null}
    </DvdScreenShell>
  );
}
