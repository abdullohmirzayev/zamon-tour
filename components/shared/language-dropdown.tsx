'use client'

import { Languages } from 'lucide-react'
import { Button } from '../ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import Image from 'next/image'
import { langs } from '@/constants'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useParams } from 'next/navigation'

const LanguageDropdown = () => {
	const { lng } = useParams()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant={'ghost'} size={'icon'}>
					<Languages />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-56'>
				<DropdownMenuGroup>
					{langs.map(item => (
						<Link href={`/${item.route}`} key={item.route}>
							<DropdownMenuItem
								className={cn(
									'cursor-pointer',
									lng === item.route && 'bg-secondary'
								)}
							>
								<Image
									src={`/assets/locales/${item.route}.png`}
									alt={item.label}
									width={30}
									height={30}
								/>
								<span className='ml-2 font-poppins font-medium'>
									{item.label}
								</span>
							</DropdownMenuItem>
						</Link>
					))}
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default LanguageDropdown
