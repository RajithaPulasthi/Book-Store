import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';


const Collection = () => {
  const { products, search, showSearch} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');
  const [latestProducts, setLatestProducts] = useState([]);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)){
      setCategory(prev=>prev.filter(item => item !== e.target.value))
    }
    else{
      setCategory(prev=> [...prev,e.target.value])
    }
  }
  useEffect(() => {
    getProducts();
    console.log('rendered');
  }, [latestProducts]); 

  const getProducts = async () =>{
    try {
      const res = await products;
      setLatestProducts(res);
      setFilterProducts(res);
      console.log('set latest', res);
    } catch (error) {
      console.log(error);
    }
  }
  

  const applyFilter = () => {

    let productsCopy = latestProducts.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
    }

    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    setFilterProducts(productsCopy);
  }

  const sortProduct = () =>{
    let fpCopy = filterProducts.slice();

    switch(sortType){
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;

        case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
        break;

        default:
        applyFilter();
        break;
    }
  }

  useEffect(() =>{
    setFilterProducts(products);
  },[])

  useEffect(() =>{
    applyFilter();
  },[category,search,showSearch])

  useEffect(() =>{
    sortProduct();
  },[sortType])


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Options */}
      <div className='min-w-60'>
        <p 
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : '' }`}  src={assets.dropDownIconRight} alt="" />
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden sm:block'}`}>
          {/* Add filter content here */}
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
          <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'ScienceFiction'} onChange={toggleCategory}/> Science Fiction
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Fantasy'} onChange={toggleCategory}/> Fantasy
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Horror'} onChange={toggleCategory}/> Horror
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Romance'} onChange={toggleCategory}/> Romance
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Thriller'} onChange={toggleCategory}/> Thriller
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Mystery'} onChange={toggleCategory}/> Mystery
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Memoir'} onChange={toggleCategory}/> Memoir
            </p>
          </div>
        </div>
        
      </div>

      {/* Product display section */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'}/>
          {/* Product sort */}
          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-400 text-sm px-2'>
            <option value="relavent">Sort by : Relavent</option>
            <option value="low-high">Sort by : Low to High</option>
            <option value="high-low">Sort by : High to Low</option>
          </select>
        </div>
        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 gap-y-6'>
          {
            filterProducts.map((item, index) => (
              <ProductItem key={index} name={item.title} id={item.id} price={item.price} image={item.image}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection