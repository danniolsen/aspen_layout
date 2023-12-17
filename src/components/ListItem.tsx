import {
  FlatList,
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  ImageSourcePropType,
  Pressable
} from "react-native";
import Font from "../components/Font";
import Tag from "../components/Tag";
import * as Haptics from "expo-haptics";
import { useNavigation } from "@react-navigation/native";
import type { ListItemType, RootStackParamList } from "../../types";


type ListItemProps = {
  item: {
    id: number;
    title: string;
    items: ListItemType[];
  };
};

type ItemType = {
  item: ListItemType;
  navigateToDetails: (item: ListItemType) => void;
};

const { width } = Dimensions.get("window");

const ListItems = ({ item }: ListItemProps) => {
  const navigation = useNavigation<RootStackParamList>();

  const goToDetails = (item: ListItemType) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    navigation.navigate("Details", { item });
  };

  return (
    <View>
      <View style={styles.title}>
        <Font size={16}>
          {item.title}
        </Font>
      </View>
      <FlatList
        data={item.items}
        horizontal={true}
        snapToInterval={width / 2}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Item item={item} navigateToDetails={item => goToDetails(item)} />
          );
        }}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const Item = ({ item, navigateToDetails }: ItemType) => {
  const onPress = () => {
    navigateToDetails(item);
  };
  
  return (
    <Pressable onPress={onPress} style={styles.itemContainer}>
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
    </Pressable>
  );
};

const styles = StyleSheet.create({
  title: {
    margin: 20
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
