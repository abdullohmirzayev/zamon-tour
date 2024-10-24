'use client'

import { useState } from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import { AlignCenter } from 'lucide-react'
import { Separator } from '../ui/separator'
import Link from 'next/link'
import Image from 'next/image'
import { navLinks } from '@/constants'
import useTranslate from '@/hooks/use-translate'
import LanguageDropdown from './language-dropdown'
import MediaIcon from './media-icon'
import ModeToggle from './mode-toggle'

const Mobile = () => {
	const t = useTranslate()
	const [open, setOpen] = useState(false)

	const closeModal = () => setOpen(false)

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild className='flex md:hidden'>
				<Button size={'icon'} variant={'ghost'} onClick={() => setOpen(true)}>
					<AlignCenter />
				</Button>
			</SheetTrigger>
			<SheetContent side={'top'}>
				<SheetHeader>
					<Link href={'/'} className='flex items-center' onClick={closeModal}>
						<Image
							src={'/logo.svg'}
							alt='logo'
							width={160}
							height={100}
							className='dark:invert'
						/>
					</Link>
					<Separator />
				</SheetHeader>
				<div className='mt-4 flex flex-col space-y-3'>
					{navLinks.map(nav => (
						<Link
							href={nav.id}
							key={nav.id}
							className='flex h-12 cursor-pointer items-center gap-2 rounded-sm px-3 transition-colors hover:bg-blue-400/20'
							onClick={closeModal}
						>
							<nav.icon className='size-5' />
							<span>{t(nav.name)}</span>
						</Link>
					))}
					<LanguageDropdown isMobile />
					<div className='flex items-center justify-center gap-4'>
						<MediaIcon />
						<ModeToggle />
					</div>
				</div>
			</SheetContent>
		</Sheet>
	)
}

export default Mobile
