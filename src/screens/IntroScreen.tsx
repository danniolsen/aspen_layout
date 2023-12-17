import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  Pressable
} from "react-native";
import * as Haptics from "expo-haptics";

import Animated, { FadeIn } from "react-native-reanimated";
import Font from "../components/Font";
const { width } = Dimensions.get("window");

const IntroScreen = ({ navigation }: any) => {
  const goToScreen = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    navigation.navigate("Aspen");
    navigation.reset({
      index: 0,
      routes: [{ name: "Aspen" }]
    });
  };

  return (
    <ImageBackground
      source={require("../../assets/backgroundImage.jpg")}
      style={styles.container}
      resizeMode="cover"
    >
      <Animated.View entering={FadeIn.duration(1200)} style={styles.headline}>
        <Image
          source={require("../../assets/aspen.png")}
          style={[styles.image, { width: width - 100 }]}
          resizeMode="contain"
        />
      </Animated.View>

      <Animated.View entering={FadeIn.duration(1200)} style={styles.content}>
        <View style={styles.intro}>
          <Font size={24} color="secondary">
            Plan your
          </Font>
          <Font size={40} color="secondary" variant="bold">
            Luxurious
          </Font>
          <Font size={40} color="secondary" variant="bold">
            Vacation
          </Font>
        </View>

        <View style={styles.bottomButton}>
          <Pressable onPress={goToScreen} style={styles.button}>
            <Font size={16} color="secondary" variant="bold">
              Explore
            </Font>
          </Pressable>
        </View>
      </Animated.View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headline: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  content: {
    flex: 3,
    marginHorizontal: 20
  },
  image: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  intro: {
    flex: 3,
    paddingVertical: 40,
    justifyContent: "flex-end"
  },
  bottomButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    backgroundColor: "#176FF2",
    width: "100%",
    alignItems: "center",
    paddingVertical: 20,
    borderRadius: 20
  }
});

export default IntroScreen;
