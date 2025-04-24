import React from "react";
import { Card } from "schan/ui"; // Sử dụng Card từ Schan/UI

interface StepCardProps {
  stepTitle: string;
  description: string;
}

export const StepCard: React.FC<StepCardProps> = ({ stepTitle, description }) => {
  return (
    <Card style={{ marginBottom: "1rem", padding: "1rem" }}>
      <h3 style={{ fontSize: "1.4rem", color: "#333" }}>{stepTitle}</h3>
      <p style={{ fontSize: "1rem", color: "#555" }}>{description}</p>
    </Card>
  );
};
