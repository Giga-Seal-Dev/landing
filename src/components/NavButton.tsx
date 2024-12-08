type PropsType = {
	children: string;
	id: string;
};

export default function NavButton({ children, id }: PropsType) {
	return (
		<li className='text-neutral-800 hover:text-accent transition-colors duration-200 after:block after:w-0 hover:after:w-full after:h-[2px] after:bg-accent after:transition-[width] after:duration-200 cursor-pointer'>
			<a id={`#${id}`}>{children}</a>
		</li>
	);
}
