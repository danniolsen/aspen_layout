import { View, StyleSheet, SafeAreaView, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Font from "../components/Font";

const Header = () => {
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
