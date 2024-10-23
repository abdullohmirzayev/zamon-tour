import useTranslate from '@/hooks/use-translate'
import { Mail, MapPin, PhoneOutgoing } from 'lucide-react'

const ContactInfo = () => {
	const t = useTranslate()

	return (
		<div className='-mt-24 overflow-hidden'>
			<div className='container mx-auto  max-w-6xl flex-wrap  '>
				<div className='flex size-full flex-wrap items-center justify-center space-y-5 pb-10 lg:flex-nowrap lg:space-x-5 lg:space-y-0'>
					{contactData.map((item, ind) => (
						<div
							key={ind}
							className='flex w-11/12 flex-col  flex-wrap items-center justify-center gap-4 rounded-xl bg-background p-8 text-center shadow-md  shadow-cyan-500/40 lg:w-1/3'
						>
							<div className='rounded-2xl bg-white/80 p-3 text-primary'>
								{item.icon}
							</div>
							<h3 className=' text-xl font-bold'>{t(item.title)}</h3>
							<a href={item.link}>
								<p className='text-primary'>{t(item.infoText)}</p>
							</a>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default ContactInfo

const contactData = [
	{
		icon: <PhoneOutgoing />,
		title: 'contactInfo_title1',
		infoText: '+998 99 299 99 96',
		link: 'tel:+998992999996',
	},
	{
		icon: <Mail />,
		title: 'contactInfo_title2',
		infoText: 'zamonbiznestour@mail.ru',
		link: 'mailto:zamonbiznestour@mail.ru',
	},
	{
		icon: <MapPin />,
		title: 'contactInfo_title3',
		infoText: 'contactInfo_subtitle',
		link: '#',
	},
]
