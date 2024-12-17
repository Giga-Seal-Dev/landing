import IntegrationsTile from '../components/IntegrationsTile';

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
			className='h-screen flex flex-wrap items-center content-center py-8 px-12 bg-primaryLight text-neutral-800 text-center  gap-y-5'
		>
			<div className='w-full'>
				<h2 className='text-4xl mb-7 font-semibold'>
					Чому треба обрати саме нашу платформу?
				</h2>
			</div>
			<div className='flex flex-col w-1/2 gap-y-3'>
				<div className='p-4 border shadow-lg w-full rounded-xl border-l-8 border-l-accent'>
					<h3 className='text-xl font-bold'>Геймифікація</h3>
					<p className='mt-1'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
						atque laborum dolorem numquam dignissimos, laudantium distinctio
						error tempore nisi minus nemo vero quos, accusamus quae amet
						voluptatibus alias asperiores. Laboriosam dolore perspiciatis
						inventore illum provident nulla aliquam quis? Maxime, eveniet!
					</p>
				</div>
				<div className='p-4 border shadow-lg w-full rounded-xl border-l-8 border-l-accent'>
					<h3 className='text-xl font-bold'>Аналітика</h3>
					<p className='mt-1'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
						atque laborum dolorem numquam dignissimos, laudantium distinctio
						error tempore nisi minus nemo vero quos, accusamus quae amet
						voluptatibus alias asperiores. Laboriosam dolore perspiciatis
						inventore illum provident nulla aliquam quis? Maxime, eveniet!
					</p>
				</div>
				<div className='p-4 border shadow-lg w-full rounded-xl border-l-8 border-l-accent'>
					<h3 className='text-xl font-bold'>Кросплатформеність</h3>
					<p className='mt-1'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
						atque laborum dolorem numquam dignissimos, laudantium distinctio
						error tempore nisi minus nemo vero quos, accusamus quae amet
						voluptatibus alias asperiores. Laboriosam dolore perspiciatis
						inventore illum provident nulla aliquam quis? Maxime, eveniet!
					</p>
				</div>
			</div>
			<div className='w-1/2 flex flex-col font-bold h-'>
				<h3 className='text-xl'>Інтеграції</h3>
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
