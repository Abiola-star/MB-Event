import React,{useContext} from 'react'
import {EventContext} from "../context/EventContext.jsx"
import EventsCard from "../Components/EventCard.jsx"

export default function UpcomingEvents() {
  const {allEvents} = useContext(EventContext)
  return (
    <div className="container mx-auto py-5 px-5 lg:px-10">
       <div className="flex justify-between">
         <p className="text-lg font-semibold py-3">Upcoming Events</p>
         <button disabled className="text-lg">see all</button>
       </div>
        <div className="flex-col lg:flex lg:flex-row justify-between items-center gap-5 lg:grid-cols-12">
            {allEvents.slice(0,3).map((event)=>{
                return <EventsCard key={event.id} {...event} />
            })}
        </div>
    </div>
  )
}