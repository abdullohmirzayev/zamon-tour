'use client'

import { useEffect, useState } from 'react'
import BestLocation from '../_components/bestLocations'
import BookPrefered from '../_components/bookPrefered'
import Contact from '../_components/contact'
import ContactInfo from '../_components/contactInfo'
import ExploreDestinations from '../_components/exploreDestinations'
import Footer from '../_components/footer'
import Hero from '../_components/hero'
import VisaSuppoert from '../_components/visaSupport'
import VisitOne from '../_components/visitOne'
import WeeklyOffers from '../_components/weeklyOffers'
import Navbar from '../_components/navbar'

function Page() {
	// Loader
	const [loader, setLoader] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => setLoader(false), 3000)
		return () => clearTimeout(timer)
	}, [])

	return (
		<>
			{loader ? (
				<div className='flex h-screen items-center justify-center '>
					<div className='loader'></div>
				</div>
			) : (
				<div className='mt-20'>
					<Navbar />
					<Hero />
					<WeeklyOffers />
					<ExploreDestinations />
					<VisaSuppoert />
					<VisitOne />
					<BestLocation />
					<BookPrefered />
					<ContactInfo />
					<Contact />
					<Footer />
				</div>
			)}
		</>
	)
}

export default Page
