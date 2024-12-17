type PropsType = {
	children: string;
	type: string;
	link?: string;
};

export default function Button({ children, type, link }: PropsType) {
	return (
		<div className='bg-gradient-to-r from-accent via-[#ff5500] via-80% to-secondary rounded-xl'>
			<button
				className={`rounded-xl px-6 leading-10 border-2 border-transparent font-medium
					${
						type === 'colorful'
							? 'bg-transparent text-primaryLight'
							: type === 'transparent'
							? 'bg-primaryLight bg-clip-padding'
							: ''
					}`}
			>
				<p
					className={`
						${
							type === 'transparent'
								? 'bg-gradient-to-r from-accent via-[#ff5500] via-80% to-secondary bg-clip-text text-transparent'
								: ''
						}`}
				>
					{children}
				</p>
			</button>
		</div>
	);
}
