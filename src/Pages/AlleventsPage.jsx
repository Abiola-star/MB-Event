import React, { useState , useEffect, useContext} from 'react'
import AppLayout from "../Layouts/AppLayout"
import SearchBoxInput from "../Components/AllEventsComponents/InputSearch"
import Loader from '../Components/Loader'
import { AnimatePresence } from "framer-motion"
import AllEvents from "../Components/AllEventsComponents/AllEvents"
import {EventContext} from "../context/EventContext"
export default function EventsPage() {
  const [pageLoading, setPageLoading] = useState(true);
  const { allEvents, searchResults } = useContext(EventContext);

  const eventsToShow = searchResults.length > 0 ? searchResults : allEvents;

      useEffect(() => {
      const timer = setTimeout(() => setPageLoading(false), 10);
      return () => clearTimeout(timer);
    }, []); 
  
     if (pageLoading) return <Loader/>;
  return (
    <AnimatePresence>
    <AppLayout>
        <SearchBoxInput />
        <AllEvents events={eventsToShow} />





    </AppLayout>
    </AnimatePresence>
  )
}