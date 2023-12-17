import {
  FlatList,
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  ImageSourcePropType,
  Text
} from "react-native";
import Font from "../components/Font";
import Tag from "../components/Tag";

type ItemProps = {
  id: number;
  image: ImageSourcePropType;
  rating: string;
  tag: string;
};

type ListItemProps = {
  item: {
    id: number;
    title: string;
    items: ItemProps[];
  };
};

type ItemType = {
  item: ItemProps;
};
const { width } = Dimensions.get("window");

const ListItems = ({ item }: ListItemProps) => {
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
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const Item = ({ item }: ItemType) => {
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
