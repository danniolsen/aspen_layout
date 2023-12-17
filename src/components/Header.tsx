import { useState, useRef, useCallback } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Animated
} from "react-native";
import * as Haptics from "expo-haptics";
import { MaterialIcons } from "@expo/vector-icons";
import Font from "../components/Font";

const Header = () => {
  const [menuOpen, setmenuOpen] = useState<boolean>(false);
  const shakeAnimation = useRef(new Animated.Value(0)).current;

  const toggleMenu = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setmenuOpen(!menuOpen);
    startShake();
  };

  const sequence = useCallback((toValue: number) => {
    return Animated.timing(shakeAnimation, {
      toValue: toValue,
      duration: 10,
      useNativeDriver: true
    });
  }, []);

  const startShake = () => {
    Animated.sequence([
      sequence(2),
      sequence(-2),
      sequence(2),
      sequence(0)
    ]).start();
  };

  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.container}>
        <View style={styles.locationHead}>
          <Font size={14} variant="light">
            Explore
          </Font>
          <View style={styles.location}>
            <MaterialIcons name="location-pin" size={16} color="#176FF2" />
            <Font size={12} variant="regular" color="tertiary">
              Aspen, USA
            </Font>
          </View>
        </View>

        <View style={styles.titleContainer}>
          <Font size={32}>Aspen</Font>
          <Pressable onPress={toggleMenu}>
            <Animated.View
              style={{ transform: [{ translateX: shakeAnimation }] }}
            >
              <MaterialIcons
                name={menuOpen ? "close" : "menu"}
                size={32}
                color="#606060"
              />
            </Animated.View>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1
  },
  container: {
    paddingHorizontal: 10
  },
  locationHead: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  location: {
    flexDirection: "row",
    alignItems: "center"
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5
  }
});

export default Header;
