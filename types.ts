export type ratingType = {
  rate: number;
  count: number;
};
export type itemType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ratingType;
};
export type productType = {
  id: number;
  name: string;
  price: number;
  desc: string;
  category: string;
  image: string;
  rating: ratingType;
};
export type cartItemType = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};
export type cartType = cartItemType[];
export type setCartType = React.Dispatch<React.SetStateAction<cartType>>;
