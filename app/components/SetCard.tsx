"use client";

import { ArrowLineUpRight } from "@phosphor-icons/react";

type SetCardProps = {
  name: string;
  songCount: number;
};

export default function SetCard({ name, songCount }: SetCardProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-background-04 bg-background-02 p-4">
      <div>
        <h4 className="text-lg font-medium">{name}</h4>
        <p className="text-sm font-medium text-foreground-04">
          {songCount} songs
        </p>
      </div>
      <ArrowLineUpRight size={24} />
    </div>
  );
}
