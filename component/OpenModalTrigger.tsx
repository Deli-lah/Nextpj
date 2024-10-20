"use client";

import { openModal } from "@/util/modal";
import React from "react";
type Props = {
  color: "btn-secondary" | "btn-info" | "btn-primary";
  size: "btn-sm" | "btn-lg" | "btn";
  modalId: string;
  triggerName?: String;
  icon?: React.ReactNode;
};
const OpenModalTrigger = ({
  color,
  size,
  modalId,
  triggerName,
  icon,
}: Props) => {
  return (
    <div
      className={`btn flex items-center gap-2 ${size} ${color}`}
      onClick={() => openModal(modalId)}
    >
      {icon}
      {triggerName}
    </div>
  );
};

export default OpenModalTrigger;
