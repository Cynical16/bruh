export interface Product {
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  sellixProductId: string;
}

export const demoProducts: Product[] = [
  {
    name: "Youtube Premium",
    imageUrl: "https://i.imgur.com/qn4bBCP.png",
    price: 2,
    description: "High-quality Youtube premium account with full features.",
    sellixProductId: "67789b53ddc14"
  },
  {
    name: "Netflix Premium",
    imageUrl: "https://i.imgur.com/0OB46Ie.png", 
    price: 2,
    description: "High-quality Netflix premium account for you with full features.",
    sellixProductId: "6777e24016831"
  },
  {
    name: "Spotify Premium",
    imageUrl: "https://i.imgur.com/agwdXST.png",
    price: 2,
    description: "Full-featured spotify premium account with premium support.",
    sellixProductId: "67789b025a449"
  },
] as const; 