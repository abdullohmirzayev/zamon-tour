'use client'

import LanguageDropdown from '@/components/shared/language-dropdown'
import MediaIcon from '@/components/shared/media-icon'
import Mobile from '@/components/shared/mobile'
import ModeToggle from '@/components/shared/mode-toggle'
import { navLinks } from '@/constants'
import useTranslate from '@/hooks/use-translate'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
	const t = useTranslate()

	return (
		<div className='fixed inset-0 z-40 h-20 bg-background/70 backdrop-blur-xl'>
			<div className='container mx-auto flex h-full max-w-7xl items-center justify-between border-b'>
				<div className='flex items-center gap-4'>
					<Link href={'/'} className='flex items-center'>
						<Image
							src={'/logo.svg'}
							alt='logo'
							width={160}
							height={100}
							className='dark:invert'
						/>
					</Link>
				</div>

				<div className='hidden items-center gap-3 md:flex'>
					<div className='flex items-center gap-3'>
						{navLinks.map(nav => (
							<Link
								href={`${nav.id}`}
								key={nav.id}
								className='font-medium transition-colors duration-300 ease-out hover:text-blue-500 hover:underline'
							>
								{t(nav.name)}
							</Link>
						))}
					</div>
				</div>
				<div className='flex items-center gap-2 md:border-r md:pr-3'>
					<div className='hidden md:flex'>
						<MediaIcon />
						<LanguageDropdown />
					</div>
					<Mobile />
					<ModeToggle />
				</div>
			</div>
		</div>
	)
}

export default Navbar
