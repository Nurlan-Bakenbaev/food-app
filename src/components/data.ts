import photo1 from "../../public/p1.png";
import photo2 from "../../public/p2.png";
import photo3 from "../../public/p3.png";
import photo4 from "../../public/p4.png";
import photo5 from "../../public/p5.png";
import photo6 from "../../public/p6.png";
import menu1 from "../../public/m1.png";
import menu2 from "../../public/m2.png";
import menu3 from "../../public/m3.png";
import { green } from "@mui/material/colors";

export interface PizzaOption {
  size: string;
  additional_price: number;
}

export interface Pizza {
  id: number;
  name: string;
  description: string;
  fulldesc?: string;
  photo: any;
  price: Number;
  options: PizzaOption[];
}

export const FeaturedProducts: Pizza[] = [
  {
    id: 1,
    name: "Margherita Pizza",
    description:
      "A classic pizza with tomato sauce, mozzarella cheese, and fresh basil leaves.",
    photo: photo1,
    price: 10,
    options: [
      {
        size: "Small",
        additional_price: 0,
      },
      {
        size: "Medium",
        additional_price: 2,
      },
      {
        size: "Large",
        additional_price: 4,
      },
    ],
  },
  {
    id: 2,
    name: "American Burger",
    description:
      "A delicious pizza topped with pepperoni slices and melted cheese.",
    photo: photo2,
    fulldesc:
      "Vegetarian pizza is a popular and versatile pizza variation that caters to individuals who prefer a meatless diet or simply enjoy the delicious combination of plant-based ingredients. Instead of traditional meat toppings, it features an array of colorful and flavorful vegetables. Common toppings include tomato sauce, mozzarella cheese, bell peppers, onions, mushrooms, olives, spinach, artichoke hearts, and fresh basil leaves. Vegetarian pizza is celebrated for its vibrant and wholesome flavors, offering a healthier alternative without sacrificing taste. It accommodates a wide range of dietary preferences, including those who follow vegetarian and vegan lifestyles, making it a delightful and inclusive choice for pizza lovers of all backgrounds.",
    price: 12,
    options: [
      {
        size: "Small",

        additional_price: 0,
      },
      {
        size: "Medium",

        additional_price: 3,
      },
      {
        size: "Large",

        additional_price: 5,
      },
    ],
  },
  {
    id: 3,
    name: "Vegetarian Pizza",
    description:
      "A colorful pizza with a variety of fresh vegetables and cheese.",
    photo: photo3,
    price: 11,
    options: [
      {
        size: "Small",

        additional_price: 0,
      },
      {
        size: "Medium",
        additional_price: 3,
      },
      {
        size: "Large",
        additional_price: 6,
      },
    ],
  },
  {
    id: 4,
    name: "Italian Pasta",
    description:
      "A flavorful pizza with BBQ sauce, chicken, onions, and cheese.",
    photo: photo4,
    price: 13,
    options: [
      {
        size: "Small",

        additional_price: 1,
      },
      {
        size: "Medium",
        additional_price: 4,
      },
      {
        size: "Large",
        additional_price: 7,
      },
    ],
  },
  {
    id: 5,
    name: "Hawaiian Burger",
    description: "A tropical pizza with ham, pineapple, and cheese.",
    photo: photo5,
    price: 13,
    options: [
      {
        size: "Small",

        additional_price: 1,
      },
      {
        size: "Medium",

        additional_price: 4,
      },
      {
        size: "Large",

        additional_price: 7,
      },
    ],
  },
  {
    id: 6,
    name: " Pizza",
    description:
      "An extravagant pizza with a variety of toppings, including pepperoni, sausage, peppers, and more.",
    photo: photo6,
    price: 14,
    options: [
      {
        size: "Small",

        additional_price: 2,
      },
      {
        size: "Medium",

        additional_price: 5,
      },
      {
        size: "Large",

        additional_price: 9,
      },
    ],
  },
];

type Menu = {
  id: number;
  slug: string;
  title: string;
  desc: string;
  img?: any;
  color: string;
}[];
export const menuData: Menu = [
  {
    id: 1,
    slug: "pastas",
    color: "white",
    title: "Italian Pasta",
    desc: "Spaghetti tossed in a creamy sauce made with eggs, Pecorino Romano cheese, pancetta, and black pepper.",
    img: menu1,
  },
  {
    id: 2,
    slug: "burger",
    color: "black",

    title: "American Burger",
    desc: "A flavor explosion with a smoky BBQ twist! Savory beef, crispy bacon, cheddar cheese, and BBQ sauce.",
    img: menu2,
  },
  {
    id: 3,
    slug: "pizza",
    color: "white",
    title: "PizzaMania",
    desc: "Sink your teeth into our mouthwatering burger, featuring a perfectly grilled beef patty topped with fresh lettuce, ripe tomatoes, and our secret sauce, all served on a toasted bun. It's a delicious alternative to our delectable pizzas!",
    img: menu3,
  },
];
