import logo from './logo.png';
import searchIcon from './searchIcon.png';
import profileIcon from './profileIcon.png';
import cartIcon from './cartIcon.png';
import menuIcon from './menuIcon.png';
import dropDownIconLeft from './dropDownIconLeft.png';  
import dropDownIconRight from './dropDownIconRight.png';
import dropDownIcon from './dropDownIcon.png';
import HeroImage from './heroImage.png';
import crossIcon from './crossIcon.png';    
import book1 from './book1.jpg';
import book2 from './book2.jpg';
import book3 from './book3.jpeg';
import book4 from './book4.jpg';
import book5 from './book5.jpeg';
import book6 from './book6.png';
import book7 from './book7.jpg';
import book8 from './book8.jpg';
import removeIcon from './removeIcon.svg';

import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';

export const assets ={
    logo,
    searchIcon,
    profileIcon,
    cartIcon,
    menuIcon,
    dropDownIconLeft,
    dropDownIconRight,
    dropDownIcon,
    HeroImage,
    crossIcon,
    removeIcon  
}

export const images ={
    book1,
    book2,
    book3,
    book4,
    book5,
    book6,
    book7,
    book8
}

export let products = [];  // Declare an empty products array

// console.log(`Product1 is ${products}`);

// Fetch data from API and populate the products array
export async function fetchProducts() {
  try {
    const response = await fetch('http://localhost:8091/the-knowledge-hub-api/products');  // Replace with your actual API URL
    const data = await response.json();

    // Map API data to the products array
    products = data.map(product => ({
      id: product.bookID,
      title: product.name,
      author: product.author,
      publicationDate: product.publishedYear,
      category: product.genre,
      price: product.price,
      image: images[`book${product.bookID}`],  
      available: true
    }));

    console.log(`Product2 is ${products}`);
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
  }

}


// Call the function to fetch and populate products
fetchProducts();

// export const products = [{

//     id: 1,
//     title: 'UNSINKABLE',
//     author: 'Author Name',
//     publicationDate: '2022',
//     category: 'Romance',
//     price: 100,
//     image: [book1],
//     available: true
    
// },
// {
//     id: 2,
//     title: 'THE LIMITS',
//     author: 'Author Name',
//     publicationDate: '2022',
//     category: 'Horror',
//     price: 350,
//     image: [book2],
//     available: true
// },
// {

//     id: 3,
//     title: 'THE ONLY ONE LEFT',
//     author: 'Author Name',
//     publicationDate: '2022',
//     category: 'Fantasy',
//     price: 100,
//     image: [book3],
//     available: true
    
// },
// {
//     id: 4,
//     title: 'NovelNest',
//     author: 'Author Name',
//     publicationDate: '2022',
//     category: 'Memoir',
//     price: 350,
//     image: [book4],
//     available: true
// },
// {

//     id: 5,
//     title: 'NovelNest',
//     author: 'Author Name',
//     publicationDate: '2022',
//     category: 'Thriller',
//     price: 100,
//     image: [book5],
//     available: true
    
// },
// {
//     id: 6,
//     title: 'NovelNest',
//     author: 'Author Name',
//     publicationDate: '2022',
//     category: 'Mystery',
//     price: 350,
//     image: [book6],
//     available: true
// },
// {

//     id: 7,
//     title: 'NovelNest',
//     author: 'Author Name',
//     publicationDate: '2022',
//     category: 'Romance',
//     price: 100,
//     image: [book7],
//     available: true
    
// },
// {
//     id: 8,
//     title: 'NovelNest',
//     author: 'Author Name',
//     publicationDate: '2022',
//     category: 'ScienceFiction',
//     price: 350,
//     image: [book8],
//     available: true
// }
// ]