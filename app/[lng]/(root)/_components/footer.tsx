import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { format } from 'date-fns'
import useTranslate from '@/hooks/use-translate'

const Footer = () => {
	const t = useTranslate()

	return (
		<>
			<div
				className='relative inset-0 bg-background/70 bg-cover bg-center bg-no-repeat py-20'
				style={{ backgroundImage: 'url(/antalya.jpg)' }}
			>
				<div className='container mx-auto max-w-6xl'>
					<div className='flex flex-col items-center justify-between space-y-4 text-center md:flex-row md:text-start'>
						<div className='absolute inset-0 bg-primary/90'></div>
						<div className='z-10'>
							<h2 className='text-2xl font-bold uppercase md:text-3xl lg:text-4xl'>
								{t('footer_title')}
							</h2>
							<p className='mt-2 text-lg font-semibold md:mt-5 md:text-xl'>
								{t('footer_subtitle')}
							</p>
						</div>
						<div className='z-10'>
							<Link href={'#contacts'}>
								<Button
									size={'castum'}
									variant={'castum'}
									className='border border-white/50'
								>
									{t('footer_btn')}
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<footer className='h-20 w-full border-t border-white bg-primary'>
				<div className='container mt-7 items-center justify-center text-center text-xs md:text-base'>
					{t('footer_text1')} {format(new Date(), 'yyyy')}
					<Link href={'/'} className='hover:underline'>
						{t('footer_text2')}
					</Link>
					{t('footer_text3')}
				</div>
			</footer>
		</>
	)
}

export default Footer
