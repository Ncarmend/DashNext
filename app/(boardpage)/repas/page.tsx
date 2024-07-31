"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import { Inter } from "next/font/google";
import Header from "@/app/header/page";
import Sidnav from "@/app/dashboard/sidnav/page";
import PageFooter from "@/app/footer/page";
import 'react-calendar/dist/Calendar.css';
import '@/app/(boardpage)/repas/calendar.css';

const Meals = () => {
                const [selectedDate, setSelectedDate] = useState(new Date());

                const handleDateChange = (date: Date) => {
                    setSelectedDate(date);
                };
                const onChange = (newDate) => {
                  setDate(newDate);
                };
                const [date, setDate] = useState(new Date());

                return (
                    <>


    <div className="flex flex-col w-full min-h-screen  bg-green-300">
      <Header />
      <div className="flex h-screen flex-col md:flex-row    md:overflow-hidden">
        
        <div className="w-full flex-none md:w-64  min-h-screen ">
          <Sidnav />
        </div>
        <div className=" min-w-full  flex-grow flex-col p-6    md:overflow-y-auto md:p-12">
        <div>
                            <h1>MEALS</h1>
                            <h2> Meals Reservation Calendar
                        </h2>
                        </div>
                        
    <div className="customCalendar  min-w-full">
      <Calendar
        onChange={onChange}
        value={date}
      />
      <p>Selected date: {date.toDateString()}</p>
  
                        </div>
          
          <div className=" bg-cyan-700 ">
          
          </div>
          

          <div className=" bg-black">
          
          </div>
         
          <div className="">
          
          </div>
          
        </div>
      </div>

        <PageFooter />
    </div>
    </>
     );
            };

export default Meals;