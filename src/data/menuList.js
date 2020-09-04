import salad from '../assets/salad.jpg';
import porkCutlet from '../assets/pork-cutlet.jpg';
import crispyTofu from '../assets/crispy-tofu.jpg';
import coldSoba from '../assets/cold-soba.jpg';
import tempuraVeg from '../assets/tempura-veg.jpg';
import seaweedSalad from '../assets/seaweed-salad.jpg';
import beefVerm from '../assets/beef-vermicelli.jpg';
import appleBlossom from '../assets/apple-blossom.jpeg';

export const menuList = [
  {
    meal: 'Pork Cutlets',
    ingredients: ['noodle', 'corn', 'mushroom', 'sriracha'],
    description: 'Crispy pork cutlet served with seasonal veggies and rice',
    price: '15.99',
    image: porkCutlet,
    filters: [false, false, false, false]
  },
  {
    meal: 'Beef Vermicelli',
    ingredients: ['noodle', 'beef', 'salt', 'spinach'],
    packaging: 'plastic',
    description: "Hot beef vermicelli in a delicious and fragrant stew",
    price: '14.99',
    image: beefVerm,
    filters: [false, false, false, true]
  },
  {
    meal: 'Crispy Tofu',
    ingredients: ['noodle', 'beef', 'salt', 'spinach'],
    packaging: 'plastic',
    description: "Hard tofu breaded in panko breadcrumbs and deep fried to perfection",
    price: '10.99',
    image: crispyTofu,
    filters: [false, true, true, false]
  },
  {
    meal: 'Cold Soba Noodles',
    ingredients: ['noodle', 'sweet sauce', 'sour sauce', 'eggplant'],
    packaging: 'plastic',
    description: "Refreshing soba noodles tossed with vinegar and seasonal vegetables",
    price: '12.99',
    image: coldSoba,
    filters: [true, true, true, false]
  },
  {
    meal: 'Seaweed Salad',
    ingredients: ['seaweed', 'carrot', 'pepepr', 'lemon'],
    packaging: 'plastic',
    description: "Fresh seaweed salad made from Vancouver-sourced seaweed",
    price: '4.49',
    image: seaweedSalad,
    filters: [true, true, false, false]
  },
  {
    meal: 'Tempura Veg',
    ingredients: ['corn', 'soy beans', 'salsa', 'tortilla', 'hot sauce', ''],
    packaging: 'plastic',
    description: "In season vegetables breaded in panko crust and deep fried",
    price: '10.99',
    image: tempuraVeg,
    filters: [true, true, true, false]
  },
  {
    meal: 'Apple Blossom',
    ingredients: ['corn', 'soy beans', 'salsa', 'tortilla', 'hot sauce', ''],
    packaging: 'plastic',
    description: "Savoury dessert filled with fresh Ontario apples and a side of ice cream",
    price: '8.49',
    image: appleBlossom,
    filters: [true, true, false, false]
  }
]