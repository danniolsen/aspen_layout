import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Header from "../components/Header";
import AttractionsList from "../components/AttractionsList";

const AspenScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <AttractionsList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});

export default AspenScreen;
