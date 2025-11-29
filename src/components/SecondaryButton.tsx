import React from "react";
import { Button, ButtonProps } from "react-native-paper";
import { Colors, Spacing, Typography, BorderRadius } from "../theme/DesignSystem";

interface SecondaryButtonProps extends Omit<ButtonProps, "buttonColor" | "textColor" | "style" | "labelStyle" | "contentStyle"> {
  children: React.ReactNode;
  style?: ButtonProps["style"];
}

export default function SecondaryButton({
  children,
  style,
  labelStyle,
  contentStyle,
  ...props
}: SecondaryButtonProps) {
  return (
    <Button
      mode="contained"
      buttonColor={Colors.secondary}
      textColor={Colors.surfaceContainerHigh}
      style={[
        {
          borderRadius: BorderRadius.md,
          minHeight: 56,
        },
        style,
      ]}
      labelStyle={[
        {
          fontSize: Typography.fontSize.bodyLarge,
          fontWeight: Typography.fontWeight.medium,
          letterSpacing: Typography.letterSpacing.wide,
        },
        labelStyle,
      ]}
      contentStyle={[
        {
          paddingVertical: Spacing.buttonPaddingVertical,
          paddingHorizontal: Spacing.buttonPaddingHorizontal,
        },
        contentStyle,
      ]}
      {...props}
    >
      {children}
    </Button>
  );
}

