import Button from './Button';
import NavButton from './NavButton';

export default function Header() {
	return (
		<div className='flex items-center justify-between w-full h-16 px-12 bg-primaryLight'>
			<div>
				<a>
					<img src='' alt='logo' />
					logo
				</a>
			</div>
			<div className='flex items-center gap-16'>
				<nav className='flex justify-center text-lg'>
					<ul className='flex gap-x-6 lg:gap-x-12'>
						<NavButton id={'aboutUs'}>Про нас</NavButton>
						<NavButton id={'price'}>Ціни</NavButton>
						<NavButton id={'features'}>Можливості</NavButton>
						<NavButton id={'solutions'}>Рішення</NavButton>
						<NavButton id={'faq'}>FAQ</NavButton>
					</ul>
				</nav>
				<div className='flex gap-3'>
					<Button type={'colorful'} link={'#'}>
						Демо версія
					</Button>
					<Button type={'transparent'} link={'#'}>
						Зворотній зв'язок
					</Button>
				</div>
			</div>
		</div>
	);
}
