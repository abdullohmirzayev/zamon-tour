import SectionTitle from '@/components/shared/sectionTitle'
import WeeklyCarousel from '@/components/shared/weekly-carousel'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import useTranslate from '@/hooks/use-translate'
import Autoplay from 'embla-carousel-autoplay'

const WeeklyOffers = () => {
	const t = useTranslate()

	return (
		<div className='mx-auto max-w-6xl overflow-hidden py-12'>
			<div className='flex flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8'>
				<SectionTitle
					title={t('weekly_title')}
					subtitle={t('weekly_subtitle')}
				/>
			</div>

			<Carousel
				opts={{ align: 'start', loop: true }}
				plugins={[
					Autoplay({
						delay: 2500,
					}),
				]}
				className='ml-1 mt-6 flex w-full items-center justify-center md:ml-2'
			>
				<CarouselContent className='size-full'>
					{weeeklyData.map(carous => (
						<CarouselItem
							key={carous.country}
							className='py-3 md:basis-1/2 lg:basis-1/3'
						>
							<WeeklyCarousel {...carous} />
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className='ml-10 mt-10' />
				<CarouselNext className='mr-14 mt-10' />
			</Carousel>
		</div>
	)
}

export default WeeklyOffers

const weeeklyData = [
	{
		img: '/offers1.jpg',
		country: 'hero_country3',
		checkPeople: '300',
		prise: '$700',
	},
	{
		img: '/offers2.jpg',
		country: 'hero_country2',
		checkPeople: '500',
		prise: '$500',
	},
	{
		img: '/offers3.jpg',
		country: 'hero_country4',
		checkPeople: '200',
		prise: '$800',
	},
	{
		img: '/offers4.jpg',
		country: 'weekly_country1',
		checkPeople: '400',
		prise: '$430',
	},
	{
		img: '/offers5.jpg',
		country: 'weekly_country2',
		checkPeople: '234',
		prise: '$980',
	},
	{
		img: '/offers6.jpg',
		country: 'weekly_country3',
		checkPeople: '345',
		prise: '$640',
	},
	{
		img: '/offers7.jpg',
		country: 'weekly_country4',
		checkPeople: '345',
		prise: '$550',
	},
	{
		img: '/offers8.jpg',
		country: 'hero_country1',
		checkPeople: '234',
		prise: '$420',
	},
]
