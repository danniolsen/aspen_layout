import { FlatList } from "react-native";
import { useState, useCallback } from "react";
import { attractions } from "../../data/attractionsData";
import CategoriesList from "./CategoriesList";
import ListItem from "./ListItem";

const AttractionsList = () => {
  const [fetching, setFetching] = useState(false);

  const fetchData = useCallback(
    () => {
      setFetching(true);
      setTimeout(() => {
        setFetching(false);
      }, 2000);
    },
    [fetching]
  );

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
      onRefresh={fetchData}
      refreshing={fetching}
    />
  );
};

export default AttractionsList;
