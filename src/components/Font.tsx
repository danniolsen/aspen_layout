import { Text, StyleSheet } from "react-native";

type FontSizes = 12 | 14 | 16 | 24 | 32 | 40;
type ColorTypes = "primary" | "secondary" | "tertiary";
type Variants = "regular" | "bold" | "light";

type FontTypes = {
  children: string;
  size?: FontSizes;
  variant?: Variants;
  color?: ColorTypes;
};

const variants = {
  regular: "Montserrat-Regular",
  bold: "Montserrat-Bold",
  light: "Montserrat-Light"
};

const colors = {
  primary: "#000",
  secondary: "#FFF",
  tertiary: "#606060"
};

const Font = ({ children, size, variant, color }: FontTypes) => {
  const fontFamily = variant ? variants[variant] : variants.regular;
  const fontSize: FontSizes = size ? size : 14;
  const fontColor = color ? colors[color] : colors.primary;

  return (
    <Text
      style={{ fontFamily: fontFamily, fontSize: fontSize, color: fontColor }}
    >
      {children}
    </Text>
  );
};

export default Font;
