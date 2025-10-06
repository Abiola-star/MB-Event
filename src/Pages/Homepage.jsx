import React from 'react'
import AppLayout from "../Layouts/AppLayout"
import HeroSection from "../Components/HeroSection"
import UpcomingEvents from "../Components/UpcomingEvent"
import EventCategories  from '../Components/EventCategories'
import HowItWorks from '../Components/singleEvent/HowItWorks'
import EventsNearYou from '../Components/singleEvent/EventsNearYou'



export default function HomePage() {
  return (
    <AppLayout>
        <HeroSection />
        <UpcomingEvents />
        <EventCategories />
        <HowItWorks />
        <EventsNearYou />
    </AppLayout>
  )
}