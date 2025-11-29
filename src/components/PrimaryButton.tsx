import React from "react";
import { Button, ButtonProps } from "react-native-paper";
import { Colors, Spacing, Typography, BorderRadius } from "../theme/DesignSystem";

interface PrimaryButtonProps extends Omit<ButtonProps, "buttonColor" | "textColor" | "style"> {
  children: React.ReactNode;
  style?: ButtonProps["style"];
  labelStyle?: ButtonProps["labelStyle"];
  contentStyle?: ButtonProps["contentStyle"];
}

export default function PrimaryButton({
  children,
  style,
  labelStyle,
  contentStyle,
  ...props
}: PrimaryButtonProps) {
  return (
    <Button
      mode="contained"
      buttonColor={Colors.primary}
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

