import { useContext, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import faq from '../assets/faq.svg';
import Dropdown from '../components/Dropdown';
import { HeaderTextColorContext } from '../components/Header/HeaderContext';

const dropHeadings = [
	'Що таке LMS і як вона працює?',
	'Чи можу я використовувати платформу для дистанційного навчання?',
	'Чи можу я інтегрувати платформу з іншими сервісами?',
	'Чи підходить платформа для великих освітніх установ?',
	'Чи доступна підтримка для користувачів?',
	'Чи потрібні спеціальні навички для використання платформи?',
	'Чи можна адаптувати платформу під наші потреби?',
];

const dropTexts = [
	'LMS (Learning Management System) – це система управління навчанням, яка дозволяє організовувати навчальний процес, створювати курси, перевіряти завдання, відстежувати прогрес і забезпечувати взаємодію між студентами та викладачами.',
	'Так, наша платформа чудово підходить для дистанційного навчання. Ви можете проводити онлайн-уроки, створювати інтерактивні завдання та підтримувати зв’язок зі студентами через чати та форуми.',
	'Так, наша LMS підтримує інтеграцію з популярними сервісами, такими як Google Workspace, Zoom, Microsoft Teams та іншими, що робить навчальний процес ще зручнішим.',
	'Так, платформа розроблена для масштабованості та може ефективно працювати з великою кількістю студентів, курсів і викладачів одночасно',
	'Так, ми надаємо технічну підтримку для всіх користувачів. Ви можете звернутися до нас через чат, електронну пошту або телефон у разі виникнення питань.',
	'Ні, платформа має інтуїтивно зрозумілий інтерфейс, який підходить як для новачків, так і для досвідчених користувачів.',
	'Так, платформа гнучка та дозволяє налаштовувати функціонал, дизайн і структуру курсів відповідно до ваших потреб.',
];

export default function FaqSection() {
	const { updateHeaderTextColor } = useContext(HeaderTextColorContext);
	const { ref, inView } = useInView({ threshold: 0.95 });

	useEffect(() => {
		if (inView) updateHeaderTextColor('light');
	}, [inView, updateHeaderTextColor]);

	return (
		<section
			ref={ref}
			id='faq'
			className='bg-primaryLight text-black py-10 scroll-my-20'
		>
			<div className='container mx-auto'>
				<h2 className='text-4xl mb-7 font-semibold text-center'>
					Часті запитання про нашу платформу
				</h2>
				<div className='flex w-full lg:flex-row flex-col mx-auto justify-center gap-5'>
					{/* FIRST COLUMN */}
					<div className='w-full lg:w-1/2'>
						{dropHeadings.map((heading, index) => (
							<Dropdown heading={heading} text={dropTexts[index]} key={index} />
						))}
					</div>

					{/* SECOND COLUMN */}
					<div className='w-full hidden lg:flex lg:w-1/2 items-center justify-center'>
						<img src={faq} alt='faq image' className='max-w-[600px]' />
					</div>
				</div>
			</div>
		</section>
	);
}
