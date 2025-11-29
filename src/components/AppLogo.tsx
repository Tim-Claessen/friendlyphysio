import React from "react";
import { Image, ImageStyle, StyleSheet } from "react-native";
import { ComponentDimensions } from "../theme/DesignSystem";

interface AppLogoProps {
  size?: "small" | "medium" | "large";
  style?: ImageStyle;
}

export default function AppLogo({ size = "medium", style }: AppLogoProps) {
  const logoSize = ComponentDimensions.logo[size];

  return (
    <Image
      source={require("../../assets/images/FF_logo_PurpleOrange.png")}
      style={[styles.logo, { width: logoSize, height: logoSize }, style]}
      resizeMode="contain"
    />
  );
}

const styles = StyleSheet.create({
  logo: {
    resizeMode: "contain",
  },
});

