export const variants2 = {
  open: {
    display: 'flex',
    height: 160,
    opacity: 1,
    transition: {
      duration: 2,
      delay: 0.5,
    },
  },
  closed: {
    height: 0,
    display: 'none',
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

export const variants = {
  open: {
    display: 'block',
    height: 160,
    opacity: [0, 0.25, 0.5, 0.75, 1],
    transition: {
      duration: 0.8,
    },
  },
  closed: {
    height: 0,
    display: 'none',
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

export interface ICategories {
  name: string;
  image: string;
  category: string;
}

export const categories = [
  {
    name: 'Ground Coffee',
    image: 'images/category-1.jpg',
    category: 'ground',
  },
  {
    name: 'Soluble Coffee',
    image: 'images/category-2.jpg',
    category: 'soluble',
  },
  {
    name: 'Mixed Coffee',
    image: 'images/category-3.jpg',
    category: 'mixed',
  },
];
