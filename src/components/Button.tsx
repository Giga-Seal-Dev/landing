import { motion } from 'motion/react';

type PropsType = {
	children: string;
	type: 'colorful' | 'transparent' | 'default';
	link?: string;
	size: 'small' | 'medium' | 'large';
};

export default function Button({
	children,
	type,
	size,
	link = '#',
}: PropsType) {
	return (
		<div className='relative group'>
			<motion.a
				whileHover={{
					scale: 1.05,
					transition: { duration: 0.05 },
				}}
				href={link}
				className={`inline-block rounded-full transition-all duration-300 ${
					type === 'colorful' ? 'bg-gradient-to-r from-accent to-secondary' : ''
				}`}
			>
				<button
					className={`rounded-full relative px-6 py-2 font-semibold text-lg transition-all duration-300 text-white border-2 hover:shadow-xl
			  ${
					type === 'colorful'
						? 'shadow-lg shadow-accent/40  border-transparent'
						: type === 'transparent'
						? `bg-transparent hover:text-green hover:border-green
						${size === 'small' ? 'text-sm' : size === 'medium' ? 'text-md' : 'text-lg'}`
						: ''
				}`}
				>
					{children}
				</button>
			</motion.a>
		</div>
	);
}
