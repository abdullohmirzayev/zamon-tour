import SectionTitle from '@/components/shared/sectionTitle'
import { Button } from '@/components/ui/button'
import useTranslate from '@/hooks/use-translate'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ExploreDestinations = () => {
	const t = useTranslate()

	return (
		<div
			id='about'
			className='container mx-auto flex max-w-6xl flex-col overflow-hidden py-9'
		>
			<SectionTitle
				title={t('explore_main_title')}
				subtitle={t('explore_main_subtitle')}
			/>

			{exploreData.map((item, idx) => (
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
						<p className='mt-2 line-clamp-6 text-base text-gray-700'>
							{t(item.desc)}
						</p>
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

export default ExploreDestinations

const exploreData = [
	{
		img: '/explore1.jpg',
		title: 'explore_title1',
		title_des: 'explore_title_des1',
		desc: 'explore_des1',
		btn: 'explore_btn',
	},
	{
		img: '/explore2.jpg',
		title: 'explore_title2',
		title_des: 'explore_title_des2',
		desc: 'explore_des2',
		btn: 'explore_btn',
	},
]
