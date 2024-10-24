import SectionTitle from '@/components/shared/sectionTitle'
import { Button } from '@/components/ui/button'
import useTranslate from '@/hooks/use-translate'
import { ArrowRight, Globe, Home, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const VisitOne = () => {
	const t = useTranslate()

	return (
		<div className='container mx-auto flex max-w-6xl flex-col overflow-hidden py-9'>
			<SectionTitle
				title={t('visit_main_title')}
				subtitle={t('visit_main_subtitle')}
			/>

			{visitData.map((item, idx) => (
				<div
					className='mt-5 flex flex-col items-center rounded-md border text-center md:border-none lg:flex-row lg:items-start lg:text-left'
					key={idx}
				>
					<Image
						src={item.img}
						alt={item.title_des}
						width={'324'}
						height={250}
						className='rounded object-cover'
					/>
					<div className='px-3 py-4 lg:py-0'>
						<h2 className='mb-2 text-xl font-bold'>{t(item.title)}</h2>
						<p className='text-base text-gray-700'>{t(item.title_des)}</p>
						<p className='my-2 line-clamp-4 text-base text-gray-700'>
							{t(item.desc)}
						</p>
						<hr />
						<div className='flex items-center justify-between py-3 text-xs text-gray-700 md:text-base'>
							<p className='flex items-center md:gap-1'>
								<User /> {item.population} {t('visit_people')}
							</p>
							<p className='flex items-center gap-[2px] md:gap-1'>
								<Globe /> {item.area} {t('visit_area')}
							</p>
							<p className='flex items-center gap-[2px] md:gap-1'>
								<Home /> {item.price}
							</p>
						</div>

						<hr />
						<Link href={'#contacts'}>
							<div className='mt-2 hidden cursor-pointer text-primary md:flex'>
								{t('visit_need')} <ArrowRight className='' />
							</div>
						</Link>
					</div>
					<div className='px-6 pb-2'>
						<Link href={'#contacts'}>
							<Button variant={'castum'} size={'castum'}>
								{t(item.btn)}
							</Button>
						</Link>
					</div>
				</div>
			))}

			<div className='mt-5'>
				<hr />
			</div>
		</div>
	)
}

export default VisitOne

const visitData = [
	{
		img: '/visit1.jpg',
		title: 'visit_title1',
		title_des: 'visit_title_des1',
		desc: 'visit_des1',
		btn: 'explore_btn',
		population: '8.66',
		area: '41.290',
		price: '$1.100.200',
	},
	{
		img: '/visit2.jpg',
		title: 'visit_title2',
		title_des: 'visit_title_des2',
		desc: 'visit_des2',
		btn: 'explore_btn',
		population: '44.48',
		area: '275.400',
		price: '$946.000',
	},
	{
		img: '/visit3.jpg',
		title: 'visit_title3',
		title_des: 'visit_title_des3',
		desc: 'visit_des3',
		btn: 'explore_btn',
		population: '67.41',
		area: '551,500',
		price: '$425,600',
	},
	{
		img: '/visit4.jpg',
		title: 'visit_title4',
		title_des: 'visit_title_des4',
		desc: 'visit_des4',
		btn: 'explore_btn',
		population: '67.41',
		area: '551,500',
		price: '$425,600',
	},
]
