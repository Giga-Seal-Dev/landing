import IntegrationsTile from '../components/IntegrationsTile';

import { motion } from 'motion/react';
type IntegraionsType = {
	name: string;
	iconPath: string;
};

export default function FeaturesSection() {
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
			className='min-h-screen flex flex-col gap-y-4 items-center py-10 content-center text-neutral-800 scroll-my-20'
		>
			<div className='container'>
				<h2 className='text-4xl mb-7 font-semibold text-center'>
					Чому треба обрати саме нашу платформу?
				</h2>
				<div className='container flex justify-center gap-x-6'>
					<div className='w-1/2 flex flex-col items-end gap-y-3'>
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							className='flex flex-col gap-y-4 p-8 border shadow-lg w-5/6 rounded-xl border-l-8 border-l-accent'
						>
							<h3 className='text-xl font-bold text-center'>
								Статистика та аналітика
							</h3>
							<p className='mt-1'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
								voluptate debitis dolore expedita non commodi quia saepe
								delectus cupiditate nostrum?
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							className='flex flex-col gap-y-4 p-8 border shadow-lg w-5/6 rounded-xl border-l-8 border-l-accent'
						>
							<h3 className='text-xl font-bold text-center'>
								Кросплатформерність
							</h3>
							<p className='mt-1'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
								voluptate debitis dolore expedita non commodi quia saepe
								delectus cupiditate nostrum?
							</p>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							className='flex flex-col gap-y-4 p-8 border shadow-lg w-5/6 rounded-xl border-l-8 border-l-accent'
						>
							<h3 className='text-xl font-bold text-center'>
								Створення сертифікатів
							</h3>
							<p className='mt-1'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
								voluptate debitis dolore expedita non commodi quia saepe
								delectus cupiditate nostrum?
							</p>
						</motion.div>
					</div>
					<div className='w-1/2 h-auto'>
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							className='flex flex-col gap-y-4 p-8 border shadow-lg w-5/6 h-full rounded-xl border-l-8 border-l-accent justify-center'
						>
							<h3 className='text-xl font-bold text-center'>
								Вбудований конструктор курсів
							</h3>
							<p className='mt-1'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
								voluptate debitis dolore expedita non commodi quia saepe
								delectus cupiditate nostrum?
							</p>
						</motion.div>
					</div>
				</div>
			</div>
			<div className='w-full flex flex-col font-bold py-8'>
				<h3 className='text-xl text-center'>Інтеграції</h3>
				<div className='flex flex-wrap mt-3 leading-relaxed relative gap-5 justify-center'>
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
