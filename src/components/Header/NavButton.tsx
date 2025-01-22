type PropsType = {
	children: string;
	id: string;
};

export default function NavButton({ children, id }: PropsType) {
	return (
		<li
			className='relative text-lg hover:text-green transition-colors duration-200 
      after:absolute after:h-0 after:w-full after:scale-x-0 after:hover:scale-x-100 after:left-0 after:bottom-0 after:hover:h-[2px] after:bg-green after:transition-all after:duration-200 cursor-pointer'
		>
			<a href={`#${id}`}>{children}</a>
		</li>
	);
}
