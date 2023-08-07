import React from 'react'

import FirstSection from './Sections/FirstSection'
import SecondSection from './Sections/SecondSection'
import ThirdSection from './Sections/ThirdSection'
import FourthSection from './Sections/FourthSection'
import FifthSection from './Sections/FifthSection'
import SixthSection from './Sections/SixthSection'
import TopSection from './Sections/HeaderSection'


function Home() {
  return (
    <>
        <TopSection/>
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <FourthSection/>
        <FifthSection/>
        <SixthSection/>
    </>
  )
}

export default Home