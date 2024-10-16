import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ChildProps } from '@/types'
import { ThemeProvider } from '../components/providers/theme.provider'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '700', '900'],
	variable: '--font-poppins',
})

export const metadata: Metadata = {
	title: 'Zamon Busniess tour',
	description:
		'Zamon Business Tour offers tailored, seamless, and professional corporate travel services.',
	icons: { icon: '/icon.svg' },
}

function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${poppins.variable} overflow-x-hidden`}
				suppressHydrationWarning
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}

export default RootLayout
