import { useRef } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  Animated,
  ScrollView,
  Pressable
} from "react-native";
import Font from "../components/Font";
import { MaterialIcons } from "@expo/vector-icons";
import { ListItemType } from "../../types";

type DetailsProps = {
  navigation: any;
  route: { params: { item: ListItemType } };
};

const { width } = Dimensions.get("window");

const DetailsScreen = ({ navigation, route }: DetailsProps) => {
  const { item: { id, image, rating, tag } } = route.params;

  const pan = useRef(new Animated.ValueXY()).current;
  const event = Animated.event(
    [{ nativeEvent: { contentOffset: { y: pan.y } } }],
    { useNativeDriver: false }
  );
  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />
      <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
        <MaterialIcons
          name="arrow-back-ios"
          size={24}
          color="#FFF"
          style={styles.chevron}
        />
      </Pressable>
      <ScrollView
        scrollEventThrottle={1}
        onScroll={event}
        style={styles.container}
      >
        <Animated.Image
          source={image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: 250,
            marginTop: -25,
            padding: 0,
            transform: [
              {
                translateY: pan.y.interpolate({
                  inputRange: [-1000, 0],
                  outputRange: [-100, 0],
                  extrapolate: "clamp"
                })
              },
              {
                scale: pan.y.interpolate({
                  inputRange: [-3000, 0],
                  outputRange: [20, 1],
                  extrapolate: "clamp"
                })
              }
            ]
          }}
        />
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <View style={styles.title}>
              <Font size={16} variant="bold">
                {tag}
              </Font>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "#FFF" },
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
    borderRadius: 25
  },
  content: {
    marginHorizontal: 20
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: "#FFF"
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 25,
    zIndex: 100,
    backgroundColor: "rgba(0,0,0,0.5)",
    width: 44,
    height: 44,
    padding: 5,
    borderRadius: 22
  },
  chevron: {
    width: 12,
    top: 10,
    left: 15,
    position: "absolute"
  }
});

export default DetailsScreen;
