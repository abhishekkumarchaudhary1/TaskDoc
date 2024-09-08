import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
    <section className="relative bg-gray-50 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
      <video
          src="https://res.cloudinary.com/diedel2sw/video/upload/v1725819655/sugrn0lvevdocwroq9m0.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        
      </div>
      
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center relative z-10">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
            Simply Your
            <strong className="font-extrabold text-purple-600 sm:block">
              Document Workflow.
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-white">
          Take control of your documents with StreamDocs. Effortlessly draft, organize, and collaborate in a secure and accessible space. Enjoy smooth navigation and easy sharing, making document management a breeze.</p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="block w-full rounded bg-purple-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-orange-700 focus:outline-none focus:ring active:bg-orange-500 sm:w-auto"
              to="/login"
            >
              Sign In
            </Link>

            <Link
              className="block w-full rounded px-12 py-3 text-sm font-medium text-purple-600 shadow hover:text-orange-700 focus:outline-none focus:ring active:text-orange-500 sm:w-auto border-purple-600 border-2"
              to="/signup"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </section>

<br />
    <span className="relative flex justify-center">
  <div
    class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-purple-600 to-transparent opacity-75"
  ></div>

  <span className="relative z-10 bg-white px-6 text-purple-600">TaskDoc by Abhishek</span>
</span>
<br />

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
        <h2 className="text-3xl font-bold sm:text-4xl">Discover TaskDoc Where Efficiency Meets Simplicity</h2>

        <p className="mt-4 text-gray-600">
        At TaskDoc, we prioritize making document and task management as effortless as possible. Our platform seamlessly combines document organization with task management features, giving you everything you need to stay organized and productive.
        </p>

        <p className="mt-4 text-gray-600">
        With a user-centric design and strong security measures, TaskDoc ensures that your documents and tasks are both easy to access and fully protected. We’re here to help you simplify your workflow, so you can concentrate on what truly matters.
        </p>

        <a
          href="/signup"
          className="mt-8 inline-block rounded bg-purple-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-purple-600 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Started Today
        </a>
      </div>
    </div>
  </div>
</section>

<section>
  <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="relative z-10 lg:py-16">
        <div className="relative h-64 sm:h-80 lg:h-full">
          <img
            alt=""
            src="https://res.cloudinary.com/diedel2sw/image/upload/v1725826792/gztbfjlvyzeouxp8o67g.jpg"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="relative flex items-center bg-gray-100">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>

        <div className="p-8 sm:p-16 lg:p-24">
          <h2 className="text-2xl font-bold sm:text-3xl">
          Streamline Your Workflow with TaskDoc: Documents & Tasks United
          </h2>

          <p className="mt-4 text-gray-600">
          TaskDoc merges efficient document management with a powerful to-do list system, offering the perfect solution for boosting productivity. Create, update, and share documents while managing your tasks—all in one simple, intuitive platform. Whether you’re working independently or collaborating with a team, TaskDoc keeps your projects organized and within reach, ensuring you stay ahead of your work.
          </p>

        
        </div>
      </div>
    </div>
  </div>
</section>
<div className="space-y-4 pr-40 pl-40 pb-40">
  <h1 className='text-center font-bold'>Frequently Asked Questions</h1>

  <details className="group [&_summary::-webkit-details-marker]:hidden" open>
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
    >
      <h2 className="font-medium">How can I share a document with others?</h2>

      <svg
        className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </summary>

    <p className="mt-4 px-4 leading-relaxed text-gray-700">
      To share a document, simply open it, click on the "Share" button, add the email addresses of the people you'd like to share with, adjust the permissions as needed, and hit send.
    </p>
  </details>

  <details className="group [&_summary::-webkit-details-marker]:hidden">
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
    >
      <h2 className="font-medium">How do I create an account on TaskDoc?</h2>

      <svg
        className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </summary>

    <p className="mt-4 px-4 leading-relaxed text-gray-700">
      To create an account, click on "Sign Up" from the homepage, fill in your details, and verify your email to start using TaskDoc.
    </p>
  </details>

  <details className="group [&_summary::-webkit-details-marker]:hidden">
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
    >
      <h2 className="font-medium">How do I update my account settings?</h2>

      <svg
        className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </summary>

    <p className="mt-4 px-4 leading-relaxed text-gray-700">
      Log in and navigate to "Account Settings" from your profile page. Here, you can modify your personal information, update your password, and manage your subscription preferences.
    </p>
  </details>
</div>

    </>
  )
}

export default Home
