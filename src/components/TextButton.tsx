import React from "react";
import { Button, ButtonProps } from "react-native-paper";
import { Colors, Typography } from "../theme/DesignSystem";

interface TextButtonProps extends Omit<ButtonProps, "mode" | "textColor" | "labelStyle"> {
  children: React.ReactNode;
  style?: ButtonProps["style"];
}

export default function TextButton({
  children,
  style,
  labelStyle,
  ...props
}: TextButtonProps) {
  return (
    <Button
      mode="text"
      textColor={Colors.primary}
      style={style}
      labelStyle={[
        {
          fontSize: Typography.fontSize.bodyMedium,
          fontWeight: Typography.fontWeight.medium,
          letterSpacing: Typography.letterSpacing.wide,
        },
        labelStyle,
      ]}
      {...props}
    >
      {children}
    </Button>
  );
}

