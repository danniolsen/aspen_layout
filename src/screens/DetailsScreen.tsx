import { useRef } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  ScrollView,
  Pressable,
  Image
} from "react-native";
const { width: SCREEN_WIDTH } = Dimensions.get("window");
const SCREEN_HEIGHT = 300;
import { ListItemType } from "../../types";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset
} from "react-native-reanimated";
import Font from "../components/Font";

type DetailsProps = {
  navigation: any;
  route: { params: { item: ListItemType } };
};

const { width } = Dimensions.get("window");

const DetailsScreen = ({ navigation, route }: DetailsProps) => {
  const { item: { id, image, rating, tag } } = route.params;
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const imageAnimationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-SCREEN_HEIGHT, 0, SCREEN_HEIGHT],
            [-SCREEN_HEIGHT / 2, 0, SCREEN_HEIGHT * 0.75]
          )
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-SCREEN_HEIGHT, 0, SCREEN_HEIGHT],
            [2, 1, 1]
          )
        }
      ]
    };
  });

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        <Animated.Image
          source={image}
          style={[styles.image, imageAnimationStyle]}
          resizeMode="cover"
        />

        <View style={styles.title}>
          <Font variant="bold" size={24}>
            {tag}
          </Font>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "#FFF", flex: 1 },
  image: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT
  },
  title: {
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#FFF"
  }
});

export default DetailsScreen;
