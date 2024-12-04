import { View, StyleSheet, Dimensions, StatusBar } from "react-native";
import { ListItemType } from "../../types";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";
import Font from "../components/Font";

type DetailsProps = {
  route: { params: { item: ListItemType } };
};

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const SCREEN_HEIGHT = 300;

const DetailsScreen = ({ route }: DetailsProps) => {
  const {
    item: { image, tag },
  } = route.params;
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const imageAnimationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-SCREEN_HEIGHT, 0, SCREEN_HEIGHT],
            [-SCREEN_HEIGHT / 1, 0, SCREEN_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-SCREEN_HEIGHT, 0, SCREEN_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
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

        {[...Array(3)].map((_, index) => {
          return (
            <View key={index} style={styles.section}>
              <Font>Section</Font>
            </View>
          );
        })}
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "#FFF", flex: 1 },
  image: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  title: {
    alignItems: "center",
    marginTop: 20,
  },
  section: {
    backgroundColor: "#FFF",
    height: 300,
  },
});

export default DetailsScreen;
