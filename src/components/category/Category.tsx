import { Link } from 'react-router-dom';

const categories = [
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

export default function Category() {
	return (
		<article className='p-4'>
			<h2 className='text-3xl mb-6'>Shop by category</h2>
			<section className='responsive-columns'>
				{categories.map((item, index) => (
					<Link
						key={index}
						to='/products'
						state={{ fromCategory: { category: item.category } }}
					>
						<div className='relative cursor-pointer'>
							<section className='absolute top-0 left-0 w-full h-full flex p-4 items-center'>
								<h2 className='font-bold tracking-tight text-slate-800 text-[140%] mt-24'>
									{item.name}
								</h2>
							</section>
							<img className='rounded-xl' src={item.image} alt={item.name} />
						</div>
					</Link>
				))}
			</section>
		</article>
	);
}
