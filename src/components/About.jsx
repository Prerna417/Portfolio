import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto  flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-600'>About</p>
        </div>

        <p className='text-xl mt-20'>
          I'm a passionate third-year student eager to dive headfirst into the world of web development. Building and managing websites is not just a skill for me, but a creative outlet that I find immensely fulfilling.

          In addition to my studies, I'm an active member of both the Sports and Programming Societies at my college, where I get to blend my love for athleticism and coding. This diverse involvement has taught me valuable teamwork, problem-solving, and leadership skills that I'm excited to apply in any professional setting.
        </p>

        <br />

        <p className='text-xl'>
          Outside of the digital realm, I find balance through yoga and meditation, practices that not only contribute to my personal well-being but also enhance my focus and creativity when it comes to web development. I'm on the lookout for opportunities to gain hands-on experience in web development, where I can bring my enthusiasm, creativity, and technical skills to the forefront.
        </p>
      </div>
    </div>
  )
}

export default About
