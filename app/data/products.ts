export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

const products: Product[] = [
  // Suits
  {
    id: 1,
    name: "Men's Custom Suit - Navy Blue",
    price: 120.0,
    description: "Perfect tailored navy suit with premium fabric options.",
    image: "/images/Suit1.jpg",
    category: "Suit",
  },
  {
    id: 2,
    name: "Men's Custom Suit - Charcoal Grey",
    price: 130.0,
    description: "Stylish charcoal grey suit tailored to fit.",
    image: "/images/Suit2.jpg",
    category: "Suit",
  },
  {
    id: 3,
    name: "Men's Custom Suit - Black Classic",
    price: 140.0,
    description: "Classic black suit for formal occasions.",
    image: "/images/Suit3.jpg",
    category: "Suit",
  },

  // Shirts
  {
    id: 4,
    name: "Men's Formal Shirt - White",
    price: 35.0,
    description: "Tailored white shirt perfect for office wear.",
    image: "/images/Shirt1.jpeg",
    category: "Shirt",
  },
  {
    id: 5,
    name: "Men's Casual Shirt - Light Blue",
    price: 30.0,
    description: "Comfortable casual shirt with fine stitching.",
    image: "/images/Shirt2.jpg",
    category: "Shirt",
  },
  {
    id: 6,
    name: "Men's Designer Shirt - Checked",
    price: 40.0,
    description: "Designer checked shirt tailored to your size.",
    image: "/images/Shirt3.jpg",
    category: "Shirt",
  },

  // Pants
  {
    id: 7,
    name: "Men's Formal Pant - Black",
    price: 50.0,
    description: "Elegant black pant with a perfect finish.",
    image: "/images/Pants1.jpg",
    category: "Pant",
  },
  {
    id: 8,
    name: "Men's Cotton Pant - Khaki",
    price: 45.0,
    description: "Comfort-fit khaki cotton pant.",
    image: "/images/Pants2.jpg",
    category: "Pant",
  },
  {
    id: 9,
    name: "Men's Slim Fit Jeans",
    price: 55.0,
    description: "Modern slim-fit jeans in dark blue.",
    image: "/images/Pants3.jpg",
    category: "Pant",
  },

];

export default products;
