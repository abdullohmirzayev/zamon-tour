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

const VisaSuppoert = () => {
	const t = useTranslate()

	return (
		<>
			<div id='tours' className='mx-auto max-w-6xl overflow-hidden py-12'>
				<div className='flex flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8'>
					<SectionTitle title={t('visa_title')} subtitle={t('visa_subtitle')} />
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
						{visaData.map(carous => (
							<CarouselItem
								key={carous.country}
								className='py-3 md:basis-1/2 lg:basis-1/3'
							>
								<WeeklyCarousel hide={false} {...carous} />
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className='ml-10 mt-14' />
					<CarouselNext className='mr-14 mt-14' />
				</Carousel>
			</div>
		</>
	)
}

export default VisaSuppoert

const visaData = [
	{
		img: '/visa1.jpeg',
		country: 'visa_country1',
		checkPeople: '300',
	},
	{
		img: '/visa2.jpg',
		country: 'visa_country2',
		checkPeople: '500',
	},
	{
		img: '/visa3.jpg',
		country: 'visa_country3',
		checkPeople: '200',
	},
	{
		img: '/visa4.jpg',
		country: 'visa_country4',
		checkPeople: '400',
	},
	{
		img: '/visa5.jpg',
		country: 'visa_country5',
		checkPeople: '234',
	},
	{
		img: '/visa6.jpg',
		country: 'visa_country6',
		checkPeople: '345',
	},
	{
		img: '/visa7.jpg',
		country: 'visa_country7',
		checkPeople: '345',
	},
]
