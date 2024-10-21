import { ReactNode } from 'react'

export interface ChildProps {
	children: ReactNode
}

export interface LngParams {
	params: { lng: string }
}


export interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export interface ICoursel {
	img: string
	country: string
	checkPeople: string
	prise: string
}