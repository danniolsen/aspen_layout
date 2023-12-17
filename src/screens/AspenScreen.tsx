import { StyleSheet, View, StatusBar } from "react-native";
import Header from "../components/Header";
import AttractionsList from "../components/AttractionsList";

const AspenScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <Header />
      <AttractionsList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});

export default AspenScreen;
