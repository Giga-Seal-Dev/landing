import { useState } from 'react';

export default function IntegrationsTile({
	children,
	icon,
}: {
	children: string;
	icon: string;
}) {
	const [isHovered, setIsHovered] = useState<boolean>(false);

	const mouseEnterHandler = () => {
		setIsHovered(true);
	};

	const mouseLeaveHandler = () => {
		setIsHovered(false);
	};

	return (
		<div
			className='w-32 h-32 flex justify-center items-center'
			onMouseEnter={mouseEnterHandler}
			onMouseLeave={mouseLeaveHandler}
		>
			<div
				className={`w-32 h-32 flex justify-center items-center text-center shadow-lg rounded-xl relative after:w-full after:h-full after:rounded-xl after:absolute after:top-0 after:left-0 after:bg-primaryLight after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300`}
			>
				<img src={icon} className='w-5/6' />
				{
					<p
						className={`absolute w-full select-none ${
							isHovered ? 'opacity-100' : 'opacity-0'
						} transition-all duration-300 z-20`}
					>
						{children}
					</p>
				}
			</div>
		</div>
	);
}
