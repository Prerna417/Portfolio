import React from 'react'
import sidebarmenu from '../assets/portfolio/sidebarmenu.png'
import blogapp from '../assets/portfolio/blog-app.jpg'
import calculator from '../assets/portfolio/calculator.png'
import weather from '../assets/portfolio/weather.jpg'
import Yelpcamp from '../assets/portfolio/Yelpcamp.png'
import Scoredashboard from '../assets/portfolio/Scoredashboard.jpg'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: sidebarmenu
        },
        {
            id: 2,
            src: blogapp
        },
        {
            id: 3,
            src: calculator
        },
        {
            id: 4,
            src: weather
        },
        {
            id: 5,
            src: Yelpcamp
        },
        {
            id: 6,
            src: Scoredashboard
        },
    ]

    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work
                    </p>
                </div>


                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                    {
                        portfolios.map(({ id, src }) => (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                                <div className='flex items-center justify-center'>
                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                                </div>
                            </div>
                        ))
                    }


                </div>
            </div>
        </div>
    )
}

export default Portfolio
