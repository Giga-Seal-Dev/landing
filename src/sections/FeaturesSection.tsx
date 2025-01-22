import { motion } from 'motion/react';
import features from '../assets/Features Overview-amico.svg';
import IntegrationsTile from '../components/IntegrationsTile';

type IntegraionsType = {
	name: string;
	iconPath: string;
};

type CardInfoType = {
	title: string;
	text: string;
};

export default function FeaturesSection() {
	const cardInfo: CardInfoType[] = [
		{
			title: 'Статистика та аналітика',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptate debitis dolore expedita non commodi quia saepe delectus cupiditate nostrum?',
		},
		{
			title: 'Кросплатформерність',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptate debitis dolore expedita non commodi quia saepe delectus cupiditate nostrum?',
		},
		{
			title: 'Створення сертифікатів',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptate debitis dolore expedita non commodi quia saepe delectus cupiditate nostrum?',
		},
		{
			title: 'Вбудований конструктор курсів',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptate debitis dolore expedita non commodi quia saepe delectus cupiditate nostrum?',
		},
	];
	const integragionsList: IntegraionsType[] = [
		{ name: 'Zoom', iconPath: '/assets/integrations_icons/zoom.png' },
		{
			name: 'Google Calendar',
			iconPath: '/assets/integrations_icons/google_calendar.png',
		},
		{
			name: 'Google Meet',
			iconPath: '/assets/integrations_icons/google_meet.png',
		},
		{
			name: 'AI Assistant',
			iconPath: '/assets/integrations_icons/ai.png',
		},
		{ name: 'Telegram', iconPath: '/assets/integrations_icons/telegram.png' },
		{ name: 'Viber', iconPath: '/assets/integrations_icons/viber.png' },
		{
			name: 'Stripe',
			iconPath: '/assets/integrations_icons/stripe.png',
		},
		{ name: 'Monobank', iconPath: '/assets/integrations_icons/monobank.png' },
	];

	return (
		<section
			id='features'
			className='min-h-screen flex flex-col gap-y-16 items-center pt-10 px-4 bg-primaryLight bg-[url(./assets/layered-waves-haikei.svg)] bg-cover bg-center bg-no-repeat text-neutral-800 relative scroll-my-20'
		>
			<div className='container'>
				<h2 className='text-4xl mb-7 font-semibold text-center'>
					Чому треба обрати саме нашу платформу?
				</h2>
				<div className='container flex justify-center'>
					<div className='w-full hidden lg:flex lg:w-1/2 items-center justify-center'>
						<img
							src={features}
							alt='features image'
							className='max-w-[600px]'
						/>
					</div>
					<div className='w-1/2 flex flex-wrap justify-center gap-y-2 gap-x-4 h-full'>
						{cardInfo.map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6 }}
								className={`flex flex-col gap-y-4 p-8 bg-white border shadow-md rounded-xl w-5/12  ${
									index % 2 === 0
										? 'border-l-8 border-l-accent'
										: 'border-r-8 border-r-accent'
								}`}
							>
								<div className='flex items-center justify-center h-12'>
									<h3 className='text-xl font-semibold text-center text-darkGreen'>
										{item.title}
									</h3>
								</div>
								<p className='mt-auto text-black'>{item.text}</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>
			<div className='w-full flex flex-col font-bold py-8'>
				<h3 className='text-2xl text-center [text-shadow:_3px_3px_2px_rgba(41,52,53,0.8)] text-primaryLight'>
					Інтеграції таких сервісів як:
				</h3>
				<div className='flex flex-wrap mt-3 gap-5 justify-center'>
					{integragionsList.map((item, index) => (
						<IntegrationsTile key={index} icon={item.iconPath}>
							{item.name}
						</IntegrationsTile>
					))}
				</div>
			</div>
		</section>
	);
}
