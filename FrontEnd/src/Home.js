// import React from 'react'

// function Home() {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home

// Home.js
import React from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { NewCourses } from './components/NewCourses.tsx';
import { ExistingCourses } from './components/ExistingCourses.tsx';


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="partition">
        <NewCourses />
        <ExistingCourses />
      </div>
    </>
  );
}

export default Home;

