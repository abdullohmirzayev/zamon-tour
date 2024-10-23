import { Button } from '@/components/ui/button'
import useTranslate from '@/hooks/use-translate'

const BookPrefered = () => {
	const t = useTranslate()

	return (
		<div
			className='bg-cover bg-center bg-no-repeat pb-48 pt-64 text-center'
			style={{ backgroundImage: 'url(/bookPrefered-bg.jpg)' }}
		>
			<div className='container mx-auto max-w-6xl items-center justify-center'>
				<h4 className='mb-4 pb-6 text-xl font-medium'>{t('book_title')}</h4>

				<h2 className='mb-7 text-5xl font-bold'>{t('book_subtitle')}</h2>

				<Button
					variant={'castum'}
					size={'castum'}
					className='dark:hover:bg-white/70'
				>
					{t('book_btn')}
				</Button>
			</div>
		</div>
	)
}

export default BookPrefered
