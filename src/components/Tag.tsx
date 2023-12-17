import { View, StyleSheet, Image } from "react-native";
import Font from "./Font";

type TagProps = {
  tag: string;
  hasStar?: boolean | false;
};

const Tag = ({ tag, hasStar }: TagProps) => {
  return (
    <View style={styles.container}>
      {hasStar
        ? <Image
            style={styles.icon}
            source={require("../../assets/star.png")}
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
