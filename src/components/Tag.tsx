import { View, StyleSheet, Image } from "react-native";
import Font from "./Font";
import { MaterialIcons } from "@expo/vector-icons";

type IconProps = {
  materialIconName: keyof typeof MaterialIcons.glyphMap;
};
type TagProps = {
  tag: string;
  icon?: IconProps;
};
const Tag = ({ tag, icon }: TagProps) => {
  return (
    <View style={styles.container}>
      {icon
        ? <MaterialIcons
            name={icon}
            size={12}
            color="#FFF"
            style={styles.icon}
          />
        : null}
      <Font size={12} color="secondary">
        {tag}
      </Font>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 5,
    borderRadius: 100,
    backgroundColor: "#4D5652"
  },
  icon: { marginRight: 5 }
});
export default Tag;
