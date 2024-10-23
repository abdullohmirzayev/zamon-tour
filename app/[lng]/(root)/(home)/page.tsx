'use client'

import BestLocation from '../_components/bestLocations'
import ExploreDestinations from '../_components/exploreDestinations'
import Hero from '../_components/hero'
import VisaSuppoert from '../_components/visaSupport'
import VisitOne from '../_components/visitOne'
import WeeklyOffers from '../_components/weeklyOffers'

function Page() {
	return (
		<div className='mt-20'>
			<Hero />
			<WeeklyOffers />
			<ExploreDestinations />
			<VisaSuppoert />
			<VisitOne />
			<BestLocation />
		</div>
	)
}

export default Page
