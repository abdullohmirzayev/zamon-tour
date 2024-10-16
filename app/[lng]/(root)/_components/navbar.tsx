import LanguageDropdown from '@/components/shared/language-dropdown'
import ModeToggle from '@/components/shared/mode-toggle'
import { navLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
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

				<div className='flex items-center gap-3'>
					<div className='flex items-center gap-3'>
						{navLinks.map(nav => (
							<Link
								href={`${nav.id}`}
								key={nav.id}
								className='font-medium transition-colors duration-300 ease-out hover:text-blue-500 hover:underline'
							>
								{nav.name}
							</Link>
						))}
					</div>
				</div>
				<div className='flex items-center gap-2 border-r pr-3'>
					<LanguageDropdown />
					<ModeToggle />
				</div>
			</div>
		</div>
	)
}

export default Navbar
