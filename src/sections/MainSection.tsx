import learn from '../assets/Learning-cuate.svg';
import Button from '../components/Button';

import { motion } from 'motion/react';
export default function MainSection() {
	return (
		<section className=' text-white bg-darkGreen px-12 flex justify-center h-screen -mt-20'>
			<div className='flex flex-col md:flex-row md:container min-mobile:px-10 items-center self-center justify-between md:h-screen min-mobile:py-32 '>
				<div className='flex flex-col w-full md:w-1/2 space-y-5'>
					<motion.h1
						transition={{ duration: 0.6, delay: 0 }}
						className='text-7xl font-bold'
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
					>
						Ваш надійний партнер у світі навчання
					</motion.h1>

					<h2 className='text-3xl mb-7 italic'></h2>
					<motion.p
						transition={{ duration: 0.6, delay: 0.1 }}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className='text-2xl'
					>
						Простота, зручність і результативність – усе це в одній платформі
						для навчання. Долучайтеся до інновацій вже сьогодні.
					</motion.p>

					<div className='w-auto'>
						<Button type='colorful' size={'large'}>
							Дізнатись більше
						</Button>
					</div>
				</div>
				<div className='flex flex-col gap-10 z-20 w-full justify-center items-center md:w-1/2'>
					<div className='w-full'>
						<img
							src={learn}
							alt='картинка'
							className=' max-w-full z-10 relative'
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
