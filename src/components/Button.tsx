type PropsType = {
	children: string;
	type: string;
	link: string;
};

export default function Button({ children, type, link }: PropsType) {
	return (
		<button
			className={`self-center md:self-start border-2 border-accent ${
				type === 'colorful' ? 'bg-accent text-primaryLight' : ''
			}
			${
				type === 'transparent' ? 'bg-primaryLight text-accent' : ''
			} rounded-xl px-6 leading-10`}
		>
			{children}
		</button>
	);
}