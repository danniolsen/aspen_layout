import { FlatList, View } from "react-native";
import { useState, useCallback, useRef } from "react";
import { attractions } from "../../data/attractionsData";
import CategoriesList from "./CategoriesList";
import ListItem from "./ListItem";
import Font from "./Font";

const AttractionsList = () => {
  const [isFetching, setIsFetching] = useState(false);
  const flatListRef = useRef<FlatList>(null);

  const ScrollToSection = (id: number) => {
    if (flatListRef.current) {
      const index = id - 1;
      flatListRef.current.scrollToIndex({
        animated: true,
        index,
        viewOffset: 45,
      });
    }
  };

  const fetchData = useCallback(() => {
    setIsFetching(true);
    setTimeout(() => {
      setIsFetching(false);
    }, 2000);
  }, [isFetching]);

  return (
    <FlatList
      data={attractions}
      ref={flatListRef}
      ListHeaderComponent={
        <CategoriesList onCategorySelected={(id) => ScrollToSection(id)} />
      }
      stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}
      snapToAlignment="center"
      renderItem={({ item }) => (
        <ListItem item={item} component={item.component} />
      )}
      keyExtractor={(item) => item.id.toString()}
      onRefresh={fetchData}
      refreshing={isFetching}
      ListFooterComponent={<FooterConponent />}
    />
  );
};

const FooterConponent = () => {
  return (
    <View style={{ marginVertical: 50, alignItems: "center" }}>
      <Font size={16} variant="light" color="tertiary">
        Footer component
      </Font>
    </View>
  );
};

export default AttractionsList;
