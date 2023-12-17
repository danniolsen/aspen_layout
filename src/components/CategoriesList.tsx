import { useState } from "react";
import { FlatList, StyleSheet, Pressable } from "react-native";
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



const CategoriesList = () => {
  const [selected, setSelected] = useState<number>(1);

  const assignNewSelected = (id: number) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setSelected(id);
  }

  return (
    <FlatList
      data={categories}
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
