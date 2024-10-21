'use client'

import Hero from '../_components/hero'
import VisaSuppoert from '../_components/visaSupport'
import WeeklyOffers from '../_components/weeklyOffers'

function Page() {
	return (
		<div className='mt-20'>
			<Hero />
			<WeeklyOffers />
			<VisaSuppoert />
		</div>
	)
}

export default Page
