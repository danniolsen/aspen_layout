import {
  FlatList,
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  Pressable,
  Image
} from "react-native";
import { useCallback } from "react";
import Font from "../components/Font";
import Tag from "../components/Tag";
import * as Haptics from "expo-haptics";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList, ListItemType } from "../../types";

type componentType = 'ImageCard' | 'CompactCard' | undefined

type ListItemProps = {
  item: {
    id: number;
    title: string;
    items: ListItemType[];
  },
  component?: componentType
};

type ItemType = {
  item: ListItemType;
  navigateToDetails?: (item: ListItemType) => void;
  component?: componentType
};

const { width } = Dimensions.get("window");

const ListItems = ({ item, component }: ListItemProps) => {
const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Details'>>();

  const goToDetails = useCallback((item: ListItemType) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    navigation.navigate("Details", { item });
  }, [item]);

  return (
    <View>
      <View style={styles.title}>
        <Font size={16}>{item.title}</Font>
      </View>
      <FlatList
        data={item.items}
        horizontal={true}
        ListEmptyComponent={<EmptyItem />}
        snapToAlignment="center"
       
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Item item={item} navigateToDetails={item => goToDetails(item)} component={component} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const EmptyItem = () => {
  return (
    <View style={styles.emptyItemContainer}>
     <Font size={24} variant="light" color="tertiary">No items found</Font>
    </View>
  );
}

const Item = ({ item, navigateToDetails, component }: ItemType) => {
  const isCompact = component === 'CompactCard'

  const onPress = () => {
    if (navigateToDetails) navigateToDetails(item);
  };
  
  return (
    <Pressable onPress={onPress} >
      {isCompact ? <CompactCard item={item}/> : <ImageCard item={item} />}
    </Pressable>
  );
};

const ImageCard = ({ item }: ItemType) => {
  return (
    <View style={styles.itemContainer}>
    <ImageBackground
      source={item.image}
      resizeMode="cover"
      imageStyle={{ borderRadius: 25 }}
      style={styles.backgroundImage}
    >
      <View style={styles.content}>
        <View style={styles.tagItem}>
          <Tag tag={item.tag} />
        </View>
        <View style={styles.tagItem}>
          <Tag tag={item.rating} hasStar={true} />
        </View>
      </View>
    </ImageBackground>
    </View>
  )
}

const CompactCard = ({ item }: ItemType) => {
  return (
    <View style={styles.compactContainer}>
      <Image source={item.image} resizeMode="cover" style={styles.compactImage} />
      <View style={styles.compactContent}>
        <Font size={14} variant="bold">{item.tag}</Font>
        <Tag tag={item.rating} hasStar={true} />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  title: {
    margin: 20
  },
  emptyItemContainer: {
    width: width - 20,
    alignItems: 'center',
    height: width / 1.2,
    justifyContent: 'center',
    margin: 10,
    borderRadius: 25,
    backgroundColor: '#F8F8F8'
  },
  itemContainer: {
    width: width / 1.7,
    height: width / 1.2,
    marginHorizontal: 10
  },
  backgroundImage: {
    aspectRatio: 1,
    width: width / 1.7,
    height: width / 1.2,
    borderRadius: 25
  },
  compactContainer: {
    width: width / 1.2,
    marginHorizontal: 10,
    borderRadius: 25,
    backgroundColor: '#F8F8F8'
  },
  compactImage: {
    width: width / 1.2,
    height: width / 3,
    borderRadius: 25,
   
  },
  compactContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  content: {
    flex: 1,
    justifyContent: "flex-end",
    margin: 10
  },
  tagItem: {
    flexDirection: "row"
  }
});

export default ListItems;
