type PropsType = {
	children: string;
	type: 'colorful' | 'transparent' | 'default';
	link?: string;
	isHeader?: boolean;
	scroll?: number;
};

export default function Button({
	children,
	type,
	link = '#',
	isHeader = false,
	scroll = 0,
}: PropsType) {
	return (
		<div className='relative group'>
			<a href={link} className='inline-block'>
				<button
					className={`rounded-full px-6 py-2 font-semibold text-lg transition-all duration-300  hover:scale-105 ${
						isHeader && scroll > document.documentElement.clientHeight
							? 'text-black border-black'
							: 'text-white'
					}
			  ${
					type === 'colorful'
						? 'bg-gradient-to-r from-accent to-secondary shadow-lg shadow-accent/40 hover:shadow-xl'
						: type === 'transparent'
						? `bg-transparent border hover:text-green hover:border-green ${
								isHeader && scroll > document.documentElement.clientHeight
									? 'border-black'
									: 'border-white'
						  }`
						: 'bg-white border border-gray-300 hover:bg-gray-100 hover:shadow-md'
				}`}
				>
					{children}
				</button>
			</a>
		</div>
	);
}
