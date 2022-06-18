import React from "react";
import HeroCarousal from "../carousel/Carousel";
import Navbar from '../navbar/Navbar'
import Card from '../Card'

export default function VisitingPlace() {
  return (
    <>
        <Navbar />
        <div className='mx-auto md:w-5/6 '>
            <HeroCarousal />
        </div>
        <div className="ml-28 grid grid-cols-2 gap-4">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </>
  );
}