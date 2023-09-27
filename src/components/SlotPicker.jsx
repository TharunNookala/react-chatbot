import React, { useState, useRef, useEffect } from 'react';

function SlotPicker(props) {
  const [dates, setDates] = useState([]);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [showTiming, setShowTiming] = useState(false);
  const containerRef = useRef(null);

  const handleDateClick = (date)=>{
    setDate(date);
    console.log(date);
    setShowTiming(true);
  }

  const handleTimeClick = (time)=>{
    setTime(time);
    console.log(time);
    props.actions.timingMessage({date, time});
    document.getElementById("slot-div").style.display = "none";
  }

  const generateDates = () => {
    const today = new Date();
    const dateArray = [];

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      // Format the date to display only date, month, and day
      const formattedDate = currentDate.toLocaleDateString(undefined, {
        day: 'numeric',
        month: 'short',
        weekday: 'short',
      });
      dateArray.push(formattedDate);
    }

    setDates(dateArray);
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -100,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 100,
        behavior: 'smooth',
      });
    }
  };

 useEffect(() => {
    generateDates();
  }, []);

  return (
    <div className="w-full" id="slot-div">
      <div className="flex items-center justify-center gap-4 mb-4">
        <button className="bg-gray-100 p-2 rounded-md" onClick={scrollLeft}>
          &lt;
        </button>
        <div
          className="flex gap-2 items-center overflow-x-hidden"
          ref={containerRef}
        >
          {dates.map((date) => {
          const [monthAndDate, day] = date.split('\n');
          return (
            <button
              key={date}
              className="bg-gray-200 px-3 py-1 rounded-md w-full uppercase"
              onClick={() => handleDateClick(date)}
            >
             {monthAndDate}
                <br />
                {day}
            </button>
            )
          })}
        </div>
        <button className="bg-gray-100 p-2 rounded-md" onClick={scrollRight}>
          &gt;
        </button>
      </div>
      {showTiming && 
      <div className='flex flex-col gap-2 items-center justify-center'>
        <div className='flex flex-col gap-1 items-left'>
          <p className='font-medium'>Morning</p>
          <div className='w-full flex gap-2 items-center'>
          <button className='p-2 bg-gray-100 rounded' onClick={()=>handleTimeClick("9 AM")}>09:00</button>
          <button className='p-2 bg-gray-100 rounded' onClick={()=>handleTimeClick("10 AM")}>10:00</button>
          <button className='p-2 bg-gray-100 rounded' onClick={()=>handleTimeClick("11 AM")}>11:00</button>
          <button className='p-2 bg-gray-100 rounded' onClick={()=>handleTimeClick("12 PM")}>12:00</button>
          </div>
        </div>
        <div className='flex flex-col gap-1 items-left'>
          <p className='font-medium'>Noon</p>
          <div className='w-full flex gap-2 items-center'>
          <button className='p-2 bg-gray-100 rounded' onClick={()=>handleTimeClick("2 PM")}>02:00</button>
          <button className='p-2 bg-gray-100 rounded' onClick={()=>handleTimeClick("3 PM")}>03:00</button>
          <button className='p-2 bg-gray-100 rounded' onClick={()=>handleTimeClick("4 PM")}>04:00</button>
          <button className='p-2 bg-gray-100 rounded' onClick={()=>handleTimeClick("5 PM")}>05:00</button>
          </div>
        </div>
        <div className='flex flex-col gap-1 items-left'>
          <p className='font-medium'>Evening</p>
          <div className='w-full flex gap-2 items-center'>
          <button className='p-2 bg-gray-100 rounded' onClick={()=>handleTimeClick("7 PM")}>07:00</button>
          <button className='p-2 bg-gray-100 rounded' onClick={()=>handleTimeClick("8 PM")}>08:00</button>
          <button className='p-2 bg-gray-100 rounded' onClick={()=>handleTimeClick("9 PM")}>09:00</button>
          <button className='p-2 bg-gray-100 rounded' onClick={()=>handleTimeClick("10 PM")}>10:00</button>
          </div>
        </div>
      </div>
      }
    </div>
  );
}

export default SlotPicker;
