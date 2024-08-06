import React from 'react';
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import { Button } from '@nextui-org/button';
import { variants, variants2, categories, ICategories } from './constants.ts';
import { CoffeeIcon } from '../icons/icons.tsx';


const Dropdown = () => {
  
  const [isOpen, setIsOpen] = React.useState(false);

  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  
  const handleClick = (item: ICategories) => {
    const data =  { category: item.category }
    navigate("/products", { state: data});
  };
  
  return (
    <section className='relative  w-[130px] bg-rose-500 pointer'>
      <div
        className='flex flex-col items-center '
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className='h-[64px] flex justify-center items-center'>
          <Button
            variant='flat'
            className='flex w-[100px] justify-center items-center border border-gray-800 rounded-lg bg-rose-500 text-white  capitalize'
          >
            <CoffeeIcon />
            <span className='font-bold text-white'>Categories</span>
          </Button>
        </div>

        <motion.nav
          className='bg-rose-500 w-full absolute top-[60px] left-0 rounded-b-xl'
          animate={isOpen ? 'open' : 'closed'}
          variants={variants}
        >
          <div
            className={` ${isOpen ? 'open' : 'closed'}  capitalize h-[160px] flex flex-col justify-evenly text-center text-white text-sm`}
          >
            {categories.map((item, index) => (
              <motion.button
                key={index}
                onClick={()=>{ handleClick(item)}}
                className={` ${isOpen ? 'open' : 'closed'} pointer justify-center items-center border-y border-rose-800  hover:bg-rose-400`}
                animate={isOpen ? 'open' : 'closed'}
                variants={variants2}
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </motion.nav>
      </div>
    </section>
  );
};
export default Dropdown;
