"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

function Countdown() {
  const countdownDate = new Date();
  countdownDate.setDate(countdownDate.getDate() + 7);

  const [timeRemaining, setTimeRemaining] = useState(
    calculateTimeRemaining(countdownDate)
  );

  function calculateTimeRemaining(targetDate) {
    const now = new Date();
    const timeDiff = targetDate - now;
    if (timeDiff <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 23.59)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const remainingTime = calculateTimeRemaining(countdownDate);
      setTimeRemaining(remainingTime);
      if (
        remainingTime.days === 0 &&
        remainingTime.hours === 0 &&
        remainingTime.minutes === 0 &&
        remainingTime.seconds === 0
      ) {
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="bg-black flex flex-col md:flex-row gap-2 text-[#efbb52] ">
      <div className=" flex flex-col flex-1">
        <h1 className="text-5xl   m-7 font-semibold">
          Free <span className="text-red-500">Pancakes</span>
        </h1>
        <div className="flex items-center space-x-4 mx-7">
          <div className="text-3xl">
            <p>days {timeRemaining.days}</p>
          </div>
          <div className="text-3xl">
            <p>hours {timeRemaining.hours}</p>
          </div>
          <div className="text-3xl">
            <p>min {timeRemaining.minutes}</p>
          </div>
          <div className="text-3xl">
            <p>sec {timeRemaining.seconds}</p>
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center relative w-full h-[300px] ">
        <Image
          layout="fill"
          objectFit="cover"
          alt="Offer-image"
          src={"/images/pancakes.jpg"}
        />
      </div>
    </div>
  );
}

export default Countdown;
