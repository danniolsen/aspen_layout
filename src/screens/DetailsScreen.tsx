import { View, StyleSheet, ImageBackground, Dimensions } from "react-native";
import Font from "../components/Font";
import { ListItemType } from "../../types";

type DetailsProps = {
  navigation: any;
  route: { params: { item: ListItemType } };
};

const { width } = Dimensions.get("window");

const DetailsScreen = ({ navigation, route }: DetailsProps) => {
  const { item: { id, image, rating, tag } } = route.params;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        style={styles.backgroundImage}
        imageStyle={{ borderBottomLeftRadius: 25, borderBottomRightRadius: 25 }}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Font size={32} variant="light">
          {tag}
        </Font>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    borderRadius: 25
  },
  backgroundImage: {
    width: width,
    height: width,
    borderBottomRightRadius: 25
  },
  content: {
    marginHorizontal: 20
  }
});

export default DetailsScreen;
