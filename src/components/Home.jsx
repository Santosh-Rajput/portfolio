import React from 'react'
import { About, Experience, Hero, Tech, Works} from "../components";

const Home = () => {
    return (
        <>
            <div className='bg-hero-pattern bg-cover z-0 bg-no-repeat bg-center'>
                <Hero />
            </div>
            <div className='relative z-0 bg-primary'>
                <About />
                <Experience />
                <Tech />
                <Works />
            </div>
        </>
    )
}

export default Home
