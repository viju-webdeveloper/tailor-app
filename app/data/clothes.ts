export interface Clothes {
  id: number;
  name: string;
  price: number; // price per meter or set
  description: string;
  image: string;
  category: string;
}


const clothes: Clothes[] = [
  {
    id: 1,
    name: "Cotton Shirt Fabric - White",
    price: 199.0,
    description: "Premium cotton fabric suitable for formal shirts. Price per meter.",
    image: "/images/clothe1.jpg",
    category: "Shirt Fabric",
  },
  {
    id: 2,
    name: "Linen Shirt Fabric - Sky Blue",
    price: 270.0,
    description: "Breathable linen fabric, ideal for summer shirts. Price per meter.",
    image: "/images/clothe2.jpg",
    category: "Shirt Fabric",
  },
  {
    id: 3,
    name: "Rayon Kurti Fabric - Floral",
    price: 150.0,
    description: "Printed rayon fabric perfect for women's kurtis. Price per meter.",
    image: "/images/clothe3.jpg",
    category: "Kurti Fabric",
  },
  {
    id: 4,
    name: "Poly Viscose Suit Fabric - Grey",
    price: 450.0,
    description: "Smooth poly-viscose material for office wear suits. Price per meter.",
    image: "/images/clothe4.jpg",
    category: "Suit Fabric",
  },
  {
    id: 5,
    name: "Cotton Pant Fabric - Khaki",
    price: 220.0,
    description: "Durable cotton pant fabric for men. Price per meter.",
    image: "/images/clothe5.jpg",
    category: "Pant Fabric",
  },
  {
    id: 6,
    name: "Georgette Fabric - Pink",
    price: 180.0,
    description: "Lightweight georgette fabric suitable for salwar suits. Price per meter.",
    image: "/images/clothe6.jpg",
    category: "Salwar Fabric",
  },
  {
    id: 7,
    name: "Silk Blend Saree Fabric",
    price: 550.0,
    description: "Elegant silk-blend fabric for wedding sarees. Price per 5.5m set.",
    image: "/images/clothe7.jpg",
    category: "Saree Fabric",
  },
  {
    id: 8,
    name: "Denim Fabric - Dark Blue",
    price: 290.0,
    description: "Sturdy denim material for jeans or jackets. Price per meter.",
    image: "/images/clothe8.jpg",
    category: "Denim Fabric",
  },
  {
    id: 9,
    name: "Chiffon Dupatta Fabric - Gold",
    price: 120.0,
    description: "Soft chiffon material for dupattas. Price per meter.",
    image: "/images/clothe9.jpg",
    category: "Dupatta Fabric",
  },
  {
    id: 10,
    name: "Terry Rayon Suit Fabric - Black",
    price: 499.0,
    description: "High-quality terry rayon fabric for custom suits. Price per meter.",
    image: "/images/clothe10.jpg",
    category: "Suit Fabric",
  },
];

export default clothes;
