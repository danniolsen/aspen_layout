import { View, FlatList, StyleSheet } from "react-native";
import Font from "../components/Font";
import OptionsData from "../../data/attractionsData.json";
import CategoriesList from "./CategoriesList";

const AttractionsList = () => {
  return (
    <FlatList
      data={OptionsData.popular}
      ListHeaderComponent={CategoriesList}
      stickyHeaderIndices={[0]}
      renderItem={ListItems}
      keyExtractor={item => item.id.toString()}
      stickyHeaderHiddenOnScroll={true}
      style={styles.container}
    />
  );
};

const ListItems = () => {
  return (
    <View>
      <Font size={32}>ListItems</Font>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {}
});

export default AttractionsList;
