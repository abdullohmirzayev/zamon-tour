import { SectionTitleProps } from '@/types'

const SectionTitle = ({ subtitle, title, ...props }: SectionTitleProps) => {
	return (
		<div {...props} className='max-w-[45rem] text-center'>
			<h1 className='text-3xl font-bold capitalize leading-9'>{title}</h1>
			<p className='mt-2 text-base'>{subtitle}</p>
		</div>
	)
}

export default SectionTitle
