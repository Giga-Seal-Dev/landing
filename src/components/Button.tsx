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
			<a href={link} className='inline-block'>
				<button
					className={`rounded-full px-6 py-2 font-semibold text-lg transition-all duration-300  hover:scale-105 text-white
			  ${
					type === 'colorful'
						? 'bg-gradient-to-r from-accent to-secondary shadow-lg shadow-accent/40 hover:shadow-xl'
						: type === 'transparent'
						? `bg-transparent border-2 hover:text-green hover:border-green
						${size === 'small' ? 'text-sm' : size === 'medium' ? 'text-md' : 'text-lg'}`
						: 'bg-white border border-gray-300 hover:bg-gray-100 hover:shadow-md'
				}`}
				>
					{children}
				</button>
			</a>
		</div>
	);
}
