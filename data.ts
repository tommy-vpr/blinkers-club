export type ProductItem = {
  id: number;
  category: string;
  title: string;
  src: string;
  price: number;
};

export const data: ProductItem[] = [
  {
    id: 1,
    category: "2G Flip",
    title: "Green Apple/Blue Nerd",
    src: "/images/green-apple-blue-nerds.webp",
    price: 19.99,
  },
  {
    id: 2,
    category: "2G Flip",
    title: "Gushers/Banana Mochi",
    src: "/images/gusher-banana.webp",
    price: 19.99,
  },
  {
    id: 3,
    category: "2G Flip",
    title: "Mango Tango/Lemon Head",
    src: "/images/mango-lemon.webp",
    price: 19.99,
  },
  {
    id: 4,
    category: "2G Flip",
    title: "Tropical Grape/Melon Burst",
    src: "/images/tropical-grape-melon-burst.webp",
    price: 19.99,
  },
  {
    id: 5,
    category: "2G Flip",
    title: "Watermelon Z/Lemon Cherry Gelato",
    src: "/images/watermelon-lemon.webp",
    price: 19.99,
  },
];
