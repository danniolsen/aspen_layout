import { FlatList } from "react-native";
import { useState, useCallback, useRef } from "react";
import { attractions } from "../../data/attractionsData";
import CategoriesList from "./CategoriesList";
import ListItem from "./ListItem";

const AttractionsList = () => {
  const [fetching, setFetching] = useState(false);
  const flatListRef = useRef<FlatList>(null);

  const ScrollToSection = (id: number) => {
    if (flatListRef.current) {
      const index = id - 1;
      flatListRef.current.scrollToIndex({
        animated: true,
        index,
        viewOffset: 45
      });
    }
  };

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
      ref={flatListRef}
      ListHeaderComponent={
        <CategoriesList onCategorySelected={id => ScrollToSection(id)} />
      }
      stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}
      snapToInterval={300}
      snapToAlignment="center"
      renderItem={({ item }) =>
        <ListItem item={item} component={item.component} />}
      keyExtractor={item => item.id.toString()}
      // stickyHeaderHiddenOnScroll={true}
      onRefresh={fetchData}
      refreshing={fetching}
    />
  );
};

export default AttractionsList;
