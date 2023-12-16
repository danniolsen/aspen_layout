import { View, StyleSheet, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Font from "../components/Font";

const Header = () => {
  return (
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

      <View style={styles.title}>
        <Font size={32}>Aspen</Font>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    paddingHorizontal: 20,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1
  },
  locationHead: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  location: {
    flexDirection: "row",
    alignItems: "center"
  },
  title: {
    marginTop: 5
  }
});

export default Header;
