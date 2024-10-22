'use client'

import ExploreDestinations from '../_components/exploreDestinations'
import Hero from '../_components/hero'
import VisaSuppoert from '../_components/visaSupport'
import WeeklyOffers from '../_components/weeklyOffers'

function Page() {
	return (
		<div className='mt-20'>
			<Hero />
			<WeeklyOffers />
			<VisaSuppoert />
			<ExploreDestinations />
		</div>
	)
}

export default Page
