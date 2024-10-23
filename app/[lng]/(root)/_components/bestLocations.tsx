import SectionTitle from '@/components/shared/sectionTitle'
import { Button } from '@/components/ui/button'
import useTranslate from '@/hooks/use-translate'
import { Expand } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function ExampleComponent() {
	const [activeIndex, setActiveIndex] = useState(0)
	const [visibleImages, setVisibleImages] = useState(5)

	const images = [
		{ src: '/dubai.jpg', text: 'visit_title1', population: 2 },
		{ src: '/antalya.jpg', text: 'visit_title2', population: 3.5 },
		{ src: '/istanbul.jpg', text: 'visit_title4', population: 4.1 },
		{ src: '/sharm.jpg', text: 'visit_title3', population: 4 },
		{ src: '/visa1.jpeg', text: 'best_country', population: 3 },
	]

	const handleResize = () => {
		if (window.innerWidth < 600) {
			setVisibleImages(3)
		} else if (window.innerWidth < 800) {
			setVisibleImages(4)
		} else {
			setVisibleImages(5)
		}
	}

	useEffect(() => {
		handleResize()
		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const handleEnlarge = (index: number) => {
		setActiveIndex(index)
	}

	const t = useTranslate()

	return (
		<div className='container mx-auto flex max-w-6xl flex-col items-center overflow-hidden py-3 text-center'>
			<SectionTitle
				title={t('best_main_title')}
				subtitle={t('best_main_subtitle')}
			/>
			<div className='mt-10 flex space-x-4'>
				{images.slice(0, visibleImages).map((image, index) => (
					<div
						key={index}
						className={`relative p-4 transition-all duration-500 ${
							activeIndex === index ? 'h-96 w-52 md:w-72 lg:w-80' : 'h-96 w-16'
						}`}
					>
						<Image
							src={image.src}
							alt={`Image ${index + 1}`}
							fill
							className='rounded-3xl object-cover'
						/>

						{activeIndex === index && (
							<div className='absolute inset-0 flex items-end rounded-3xl bg-black/50 text-white transition-all duration-1000'>
								<p className='absolute bottom-7 left-16 text-lg font-semibold lg:text-xl lg:font-bold '>
									{t(image.text)}
								</p>
								<p className='absolute bottom-1 left-16 text-sm'>
									{t('best_population')} {image.population} {t('best_m')}
								</p>
							</div>
						)}

						<Button
							variant={'ghost'}
							onClick={() => handleEnlarge(index)}
							className='absolute bottom-2 left-2 rounded-full  bg-white/40 p-1 text-primary hover:bg-white/30  hover:text-primary/90'
						>
							<Expand className='w-9' />
						</Button>
					</div>
				))}
			</div>
		</div>
	)
}
