import logo from '../../assets/logo.svg';
import Button from '../Button';
import NavButton from './NavButton';

export default function Header() {
	return (
		<div className='flex items-center sticky top-0 justify-between w-full h-20 px-12 bg-darkGreen border-b border-b-green z-50'>
			<a href='#' className='flex items-center'>
				<img src={logo} alt='logo' className='size-12' />
				<p className='text-2xl text-green'>Repetilum</p>
			</a>
			<div className='flex items-center gap-16'>
				<nav className={`flex justify-center text-lg text-white`}>
					<ul className='flex gap-x-6 lg:gap-x-12'>
						<NavButton id={'aboutUs'}>Про нас</NavButton>
						<NavButton id={'price'}>Ціни</NavButton>
						<NavButton id={'solutions'}>Рішення</NavButton>
						<NavButton id={'features'}>Можливості</NavButton>
						<NavButton id={'faq'}>FAQ</NavButton>
					</ul>
				</nav>
				<div className='flex gap-3'>
					<Button size='large' type={'colorful'} link={'#'}>
						Демо версія
					</Button>
					<Button size='large' type={'transparent'} link={'#'}>
						Зворотній зв'язок
					</Button>
				</div>
			</div>
		</div>
	);
}
