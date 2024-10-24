import { ICoursel } from '@/types'
import React from 'react'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'
import {
	Building2Icon,
	CarTaxiFront,
	Check,
	Clock10,
	Plane,
	TicketPercent,
	Users,
} from 'lucide-react'
import useTranslate from '@/hooks/use-translate'
import { Button } from '../ui/button'
import Link from 'next/link'

const WeeklyCarousel = (carous: ICoursel) => {
	const t = useTranslate()

	return (
		<Card className='select-none overflow-hidden shadow-md shadow-cyan-500/40 '>
			<CardContent className='relative h-56 w-full'>
				<Image
					fill
					src={carous?.img}
					alt={carous?.country}
					className='object-cover'
				/>
			</CardContent>

			<div className='mt-4 flex flex-row items-center justify-between px-2'>
				<h2 className='line-clamp-1 font-poppins text-2xl font-bold'>
					{t(carous?.country)}
				</h2>
				<h4 className='text-xl font-bold text-primary'>{carous?.prise}</h4>
			</div>

			<div className='mb-5 flex flex-row items-center justify-between px-2 text-[#afafaf]'>
				<h2 className='line-clamp-1 flex gap-2 font-poppins'>
					<Users className='flex' /> {`${carous?.checkPeople}`}{' '}
					{t('weekly_check')}
				</h2>
				{carous.hide && <h4 className='text-sm'>/{t('weekly_person')}</h4>}
			</div>

			<div className='px-2'>
				<hr />
			</div>

			<div className='my-4 flex flex-col px-2 capitalize'>
				<h6 className='mb-3 items-center text-sm font-semibold'>
					{carous.hide ? `${t('weekly_info')}` : `${t('visa_info')}`}
				</h6>
				<p className='mb-1 flex items-center gap-1 text-sm text-[#afafaf]'>
					{carous.hide ? <CarTaxiFront /> : <TicketPercent />}
					{carous.hide ? `${t('weekly_info1')}` : `${t('visa_info1')}`}
				</p>
				<p className='mb-1 flex items-center gap-1 text-sm text-[#afafaf]'>
					{carous.hide ? <Plane /> : <Clock10 />}
					{carous.hide ? `${t('weekly_info2')}` : `${t('visa_info2')}`}
				</p>
				<p className='mb-3 flex items-center gap-1 text-sm text-[#afafaf]'>
					{carous.hide ? <Building2Icon /> : <Check />}
					{carous.hide ? `${t('weekly_info3')}` : `${t('visa_info3')}`}
				</p>
				<Link href={'#contacts'} className='w-full'>
					<Button variant={'castum'} size={'lg'} className='w-full'>
						{t('weekly_btn')}
					</Button>
				</Link>
			</div>
		</Card>
	)
}

export default WeeklyCarousel
