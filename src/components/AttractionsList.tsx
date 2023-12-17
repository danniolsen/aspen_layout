import { FlatList } from "react-native";

import { attractions } from "../../data/attractionsData";
import CategoriesList from "./CategoriesList";
import ListItem from "./ListItem";

const AttractionsList = () => {
  return (
    <FlatList
      data={attractions}
      ListHeaderComponent={CategoriesList}
      stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}
      snapToInterval={300}
      snapToAlignment="center"
      renderItem={({ item }) => <ListItem item={item} />}
      keyExtractor={item => item.id.toString()}
      stickyHeaderHiddenOnScroll={true}
    />
  );
};

export default AttractionsList;
