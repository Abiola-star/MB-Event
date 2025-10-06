import React from 'react'
import './App.css'
import Signinpage from './Pages/Signinpage'
import Signuppage from './Pages/Signuppage'
import Resetpassword from './Pages/Resetpassword'
import Forgotpassword from './Pages/Forgotpassword'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
// import Footer from './Components/Footer'
// import Header from './Components/Header'
import Homepage from './Pages/Homepage'
import EventDetails from './Pages/EventDetails'
import Error404 from './Pages/Error404'
import AllEventsPage from './Pages/AlleventsPage'
import Comingsoon from './Components/Comingsoon'
import EventCategories from './Components/EventCategories'
import HeroSection from './Components/HeroSection'
import CreateEvent from './Pages/CreateEvent'
import ProtectRoute from './Components/ProtectRoute'
import Profile from "./Pages/Profile"
import UserEventsPage from "./Pages/UserEventsPage"
// import HowItWorks from './Components/singleEvent/HowItWorks'
// import EventsNearYou from './Components/singleEvent/EventsNearYou'
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/signin' element={<Signinpage />} />
        <Route path='/signup' element={<Signuppage />} />
        <Route path='/reset-password/:token' element={<Resetpassword />} />
        <Route path='/forgotpassword' element={<Forgotpassword />} />
        {/* <Route path='/footer' element={<Footer />} />
        <Route path='/header' element={<Header />} /> */}
        <Route path='/error404' element={<Error404 />} />
        <Route path="/events/:eventId" element={<EventDetails />} />
        <Route path='/allevents' element={<ProtectRoute><AllEventsPage /></ProtectRoute>} />
        <Route path="/comingsoon" element={<Comingsoon />} />
        {/* <Route path="/HowItworks" element={<HowItWorks />} /> */}
        {/* <Route path="/EventNearYou" element={<EventsNearYou />} /> */}
        <Route path="/herosection" element={<HeroSection />} />
        <Route path="/createEvent" element={<ProtectRoute><CreateEvent /></ProtectRoute >} />
        <Route path="/profile" element={<ProtectRoute><Profile /></ProtectRoute >} />
        <Route path="/your-events" element={<ProtectRoute><UserEventsPage /></ProtectRoute >} />
        
        


      </Routes>
      </BrowserRouter>   
    </div>
  )
}
