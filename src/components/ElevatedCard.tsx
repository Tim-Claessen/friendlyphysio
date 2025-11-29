import React from "react";
import { Card, CardProps } from "react-native-paper";
import { Colors, BorderRadius, Shadows } from "../theme/DesignSystem";

interface ElevatedCardProps extends Omit<CardProps, "style" | "elevation"> {
  children: React.ReactNode;
  elevation?: keyof typeof Shadows;
  style?: CardProps["style"];
}

export default function ElevatedCard({
  children,
  elevation = "level3",
  style,
  ...props
}: ElevatedCardProps) {
  return (
    <Card
      style={[
        {
          backgroundColor: Colors.surfaceContainerHigh,
          borderRadius: BorderRadius.lg,
          ...Shadows[elevation],
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Card>
  );
}

