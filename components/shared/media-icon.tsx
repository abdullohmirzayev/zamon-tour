import Link from 'next/link'
import { Button } from '../ui/button'
import { Instagram, Send } from 'lucide-react'

const MediaIcon = () => {
	return (
		<div className='flex items-center gap-2'>
			<Link href={'https://t.me/zamonbiznestour'} target='_blank'>
				<Button variant={'link'} size={'icon'} title='Telegram'>
					<Send />
				</Button>
			</Link>
			<Link href={'https://www.instagram.com/zamontour'} target='_blank'>
				<Button variant={'link'} size={'icon'} title='Istagram'>
					<Instagram />
				</Button>
			</Link>
		</div>
	)
}

export default MediaIcon
