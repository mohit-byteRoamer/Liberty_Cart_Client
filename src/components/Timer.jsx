import { useState, useEffect } from "react";

const CountdownTimer = () => {
   const targetDate = new Date("Sep 14, 2024").getTime();

   const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());

   useEffect(() => {
      const timer = setInterval(() => {
         setTimeLeft(targetDate - Date.now());
      }, 1000);

      return () => clearInterval(timer);
   }, [targetDate]);

   // बचा हुआ समय एक नई Date object के रूप में सेट
   const time = new Date(timeLeft);
   const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)); // only for days
   const hours = time.getUTCHours(); // hours getting UtC method through
   const minutes = time.getUTCMinutes(); // minutes getting UtC method through
   const seconds = time.getUTCSeconds(); // seconds getting UtC method through

   // Single digit values को 0 के साथ pad करना
   const formatNumber = (number) => String(number).padStart(2, "0");

   return (
      <div className="text-center">
         <div className="flex items-end space-x-2 text-3xl font-bold">
            <div>
               <div className="text-xs">Days</div>
               <div>{formatNumber(days)}</div>
            </div>
            <div className="text-red-500">:</div>
            <div>
               <div className="text-xs">Hours</div>
               <div>{formatNumber(hours)}</div>
            </div>
            <div className="text-red-500">:</div>
            <div>
               <div className="text-xs">Minutes</div>
               <div>{formatNumber(minutes)}</div>
            </div>
            <div className="text-red-500">:</div>
            <div>
               <div className="text-xs">Seconds</div>
               <div>{formatNumber(seconds)}</div>
            </div>
         </div>
      </div>
   );
};

export default CountdownTimer;
