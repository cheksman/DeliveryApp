import {IProduct} from '../store/actions/shop/shop.d';
import {Products} from './product-list';
import Brocolli from '../assets/img/brocolli.jpg';
import Mango from '../assets/img/mango.jpg';
import Cookies from '../assets/img/cookie.jpg';
import Candy from '../assets/img/candy.jpg';
import Noodle from '../assets/img/noodle.jpg';
import Coffee from '../assets/img/coffee.jpg';

const countProductsPerCategory = (
  products: IProduct[],
  categoryId: string,
): number => {
  return products.filter(val => val.categoryId === categoryId).length;
};

export const Category = [
  {
    categoryId: '1',
    categoryName: 'Vegetables',
    productsNumber: countProductsPerCategory(Products, '1'),
    categoryImage: Brocolli,
    tags: ['Cabbages', 'Peppers', 'Onions', 'Tomatoes'],
  },
  {
    categoryId: '2',
    categoryName: 'Fruits',
    productsNumber: countProductsPerCategory(Products, '2'),
    categoryImage: Mango,
    tags: ['Oranges', 'Apples', 'Mangoes'],
  },
  {
    categoryId: '3',
    categoryName: 'Bread',
    productsNumber: countProductsPerCategory(Products, '3'),
    categoryImage: Cookies,
    tags: ['Breads', 'Cookies', 'Waffles', 'Pancakes'],
  },
  {
    categoryId: '4',
    categoryName: 'Sweet',
    productsNumber: countProductsPerCategory(Products, '4'),
    categoryImage: Candy,
    tags: ['Lollipops', 'Candies'],
  },
  {
    categoryId: '5',
    categoryName: 'Pasta',
    productsNumber: countProductsPerCategory(Products, '5'),
    categoryImage: Noodle,
    tags: ['Pasta', 'Noodles'],
  },
  {
    categoryId: '6',
    categoryName: 'Beverages',
    productsNumber: countProductsPerCategory(Products, '6'),
    categoryImage: Coffee,
    tags: ['Tea', 'Coffee', 'Beverages'],
  },
];
