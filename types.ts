import { ImageSourcePropType } from "react-native";

/**  ITEMS  **/
export type AttractionListItem = {
  id: number;
  title: string;
  items: ListItemType[];
};

export type ListItemType = {
  id: number;
  title?: string;
  image: ImageSourcePropType;
  rating: string;
  tag: string;
  component?: "ImageCard" | "CompactCard";
};

/**  NAVIGATION  **/
export type IntroScreenType = undefined;
export type AspenScreenType = undefined;
export type DetailScreenType = { item: ListItemType };

export type RootStackParamList = {
  Intro: IntroScreenType;
  Aspen: AspenScreenType;
  Details: DetailScreenType;
};
