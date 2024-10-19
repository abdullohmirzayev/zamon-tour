import * as React from 'react'
import { Button } from '@/components/ui/button' // Importing ShadCN Button
import { ChevronLeft, ChevronRight, Globe, House, User } from 'lucide-react' // Using Lucide-react Icons
import useTranslate from '@/hooks/use-translate'

// Sample carousel items
const carouselItems = [
	{
		img: '/istanbul.jpg',
		title: 'hero_country1',
		population: '15.52 M',
		territory: '5,343 KM2',
		price: '$2,300,400',
	},
	{
		img: '/antalya.jpg',
		title: 'hero_country2',
		population: '8.66 M',
		territory: '41,290 KM2',
		price: '$1,100,200',
	},
	{
		img: '/dubai.jpg',
		title: 'hero_country3',
		population: '67.41 M',
		territory: '551.500 KM2',
		price: '$425.600',
	},

	{
		img: '/sharm.jpg',
		title: 'hero_country4',
		population: '69.86 M',
		territory: '513.120 KM2',
		price: '$165.450',
	},
]

const Hero = () => {
	const [currentIndex, setCurrentIndex] = React.useState<number>(0)

	const t = useTranslate()

	React.useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex(prevIndex => (prevIndex + 1) % carouselItems.length)
		}, 4500)
		return () => clearInterval(interval)
	}, [])

	// Function to move to the previous slide
	const prevSlide = () => {
		setCurrentIndex(
			(currentIndex - 1 + carouselItems.length) % carouselItems.length
		)
	}

	// Function to move to the next slide
	const nextSlide = () => {
		setCurrentIndex((currentIndex + 1) % carouselItems.length)
	}

	const advClass =
		'rounded-full border border-primary p-2 lg:p-3 text-primary dark:border-white dark:text-white'

	return (
		<div className='relative h-[650px] w-full'>
			{/* Carousel Display */}
			<div className='size-full overflow-hidden'>
				{carouselItems.map((item, index) => (
					<div
						key={index}
						className={`size-full bg-cover bg-center transition-transform duration-700 ${
							currentIndex === index ? 'block' : 'hidden'
						}`}
						style={{ backgroundImage: `url(${item.img})` }}
					>
						{/* Overlay content */}
						<div className='flex size-full flex-col items-center'>
							<div className='flex size-full flex-col items-center justify-start'>
								<h2 className='mb-5 mt-36 text-center font-normal md:text-base lg:text-lg lg:font-medium xl:text-xl'>
									{t('hero_main_title')}
								</h2>
								<h1 className='mb-7 text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl'>
									{t(item.title)}
								</h1>
								<Button variant={'castum'} size={'castum'}>
									{t('hero_btn')}
								</Button>
							</div>
							<div className='mb-8 flex w-[95%] flex-wrap justify-center gap-5 rounded-xl bg-white px-8 py-5 text-black dark:bg-primary sm:rounded-2xl sm:px-12 sm:py-6 md:mb-24 md:rounded-3xl md:px-14 md:py-7 lg:mb-32 lg:w-4/5 lg:justify-between lg:rounded-full lg:px-16 lg:py-8'>
								<div className='flex'>
									<div className={advClass}>
										<User />
									</div>
									<span className='ml-2 flex flex-col text-sm lg:ml-4 lg:text-base'>
										{t('hero_info1')}
										<h4 className='text-sm font-semibold leading-6 text-primary dark:text-white lg:text-lg lg:font-bold xl:text-xl'>
											{item.population}
										</h4>
									</span>
								</div>
								<div className='flex'>
									<div className={advClass}>
										<Globe />
									</div>
									<span className='ml-2 flex flex-col text-sm lg:ml-4 lg:text-base'>
										{t('hero_info2')}
										<h4 className='text-sm font-semibold leading-6 text-primary dark:text-white lg:text-lg lg:font-bold xl:text-xl'>
											{item.territory}
										</h4>
									</span>
								</div>
								<div className='flex'>
									<div className={advClass}>
										<House />
									</div>
									<span className='ml-2 flex flex-col text-sm lg:ml-4 lg:text-base'>
										{t('hero_info3')}
										<h4 className='text-sm font-semibold leading-6 text-primary dark:text-white lg:text-lg lg:font-bold xl:text-xl'>
											{item.price}
										</h4>
									</span>
								</div>
								<div className='flex'>
									<Button
										variant={'castum'}
										size={'castum'}
										className='bg-primary dark:bg-white hover:dark:bg-white/80'
									>
										{t('explore_btn')}
									</Button>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Navigation Controls */}
			<Button
				variant='ghost'
				className='absolute left-4 top-1/2 -translate-y-1/2'
				onClick={prevSlide}
			>
				<ChevronLeft className='size-4 md:size-5 lg:size-6' />
			</Button>

			<Button
				variant='ghost'
				className='absolute right-4 top-1/2 -translate-y-1/2'
				onClick={nextSlide}
			>
				<ChevronRight className='size-4 md:size-5 lg:size-6' />
			</Button>
		</div>
	)
}

export default Hero
