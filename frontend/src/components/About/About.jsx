import React from 'react'

const About = () => {
  return (
   <>
   
<section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
          alt=""
          src="https://res.cloudinary.com/diedel2sw/image/upload/v1725826791/o1d4xbe8arfzee7gcxrq.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Welcome to TaskDoc – Where Organization Feels Effortless!</h2>

        <p className="mt-4 text-gray-600">
        At TaskDoc, we're on a mission to make managing your tasks and documents as simple as it is powerful. Say goodbye to clutter and chaos – with TaskDoc, you get a sleek, all-in-one platform that blends seamless document management with intuitive to-do list functionality. Stay on top of your game with ease!
        </p>

        <p className="mt-4 text-gray-600">
        Designed with you in mind, TaskDoc combines a user-friendly experience with top-tier security, ensuring your tasks and documents are always at your fingertips and fully protected. We’re here to help you master your workflow, so you can focus on what truly matters.
        </p>

        <a
          href="/signup"
          className="mt-8 inline-block rounded bg-purple-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-purple-600 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Make my account!
        </a>
      </div>
    </div>
  </div>
</section></>
  )
}

export default About
