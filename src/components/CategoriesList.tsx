import { useEffect, useRef, useState } from "react";
import { FlatList, StyleSheet, Pressable, Dimensions } from "react-native";
import Font from "../components/Font";
import {categories} from "../../data/attractionsData";
import * as Haptics from "expo-haptics";

type ListItemProps = {
  item: {
    id: number,
    name: string,
  },
  selected: number
  selectCategory: (id: number) => void 
}

type categoryListProps = {
  onCategorySelected: (id: number) => void 
}

const { width } = Dimensions.get('window');
const CategoriesList = ({onCategorySelected}: categoryListProps) => {
  const [selected, setSelected] = useState<number>(1);
  const flatListRef = useRef<FlatList>(null);

  const assignNewSelected = (id: number) => {
    s.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setSelected(id);
    return onCategorySelected(id);
  }

  useEffect(() => {
    if (flatListRef.current) {
      const index = selected - 1;
      flatListRef.current.scrollToIndex({
        animated: true,
        index,
        viewOffset: width / 4
      });
    }
  }, [selected]);

  return (
    <FlatList
      data={categories}
      ref={flatListRef}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => {
        return <ListItem item={item} selected={selected} selectCategory={assignNewSelected} />
      }}
      keyExtractor={item => item.id.toString()}
      style={styles.container}
    />
  );
};

const ListItem = ({ item, selected, selectCategory }: ListItemProps) => {

  const onPress = (id: number) => {
    return selectCategory(id);
  }

  const isSelected = selected === item.id;
  const selectedStyle = isSelected ? styles.selected : styles.default;

  return (
    <Pressable onPress={()=> onPress(item.id)} style={[styles.categoryItem, selectedStyle]}>
      <Font size={14}  color={isSelected ? 'secondary': 'primary'}>{item?.name}</Font>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
  },
  categoryItem: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 25,
  },
  selected: {
    backgroundColor: 'rgba(23,	111,	242, 0.7)',
  },
  default: {
    backgroundColor: '#FFF',
    opacity: 0.3
  }
});

export default CategoriesList;
