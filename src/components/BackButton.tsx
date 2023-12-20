import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet } from "react-native";

type GoBackProps = {
  canGoBack: boolean;
  variant?: "light" | "dark";
};

const BackButton = ({ canGoBack, variant }: GoBackProps) => {
  const navigation = useNavigation();

  const light = { background: "rgba(255,255,255,0.5)", color: "#000" };
  const dark = { background: "rgba(0,0,0,0.5)", color: "#FFF" };

  const variantStyles = variant === "light" ? light : dark;

  const goBack = () => {
    if (canGoBack) {
      return navigation.goBack();
    }
  };

  return (
    <Pressable
      onPress={goBack}
      style={[styles.button, { backgroundColor: variantStyles.background }]}
    >
      <MaterialCommunityIcons
        name="arrow-left"
        size={24}
        color={variantStyles.color}
      />
    </Pressable>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 100
  }
});
