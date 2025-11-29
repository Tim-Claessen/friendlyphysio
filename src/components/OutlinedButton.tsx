import React from "react";
import { Button, ButtonProps } from "react-native-paper";
import { Colors, Spacing, Typography, BorderRadius } from "../theme/DesignSystem";

interface OutlinedButtonProps extends Omit<ButtonProps, "mode" | "buttonColor" | "textColor" | "style" | "labelStyle" | "contentStyle"> {
  children: React.ReactNode;
  style?: ButtonProps["style"];
}

export default function OutlinedButton({
  children,
  style,
  labelStyle,
  contentStyle,
  ...props
}: OutlinedButtonProps) {
  return (
    <Button
      mode="outlined"
      buttonColor={Colors.surfaceContainerHigh}
      textColor={Colors.primary}
      style={[
        {
          borderRadius: BorderRadius.md,
          minHeight: 64,
          borderColor: Colors.primary,
        },
        style,
      ]}
      labelStyle={[
        {
          fontSize: Typography.fontSize.headlineSmall,
          fontWeight: Typography.fontWeight.regular,
        },
        labelStyle,
      ]}
      contentStyle={[
        {
          paddingVertical: Spacing.md,
          paddingHorizontal: Spacing.lg,
        },
        contentStyle,
      ]}
      {...props}
    >
      {children}
    </Button>
  );
}

