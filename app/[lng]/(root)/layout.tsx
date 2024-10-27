import { ChildProps } from '@/types'
import React from 'react'

const Layout = ({ children }: ChildProps) => {
	return (
		<div>
			<main>{children}</main>
		</div>
	)
}

export default Layout
