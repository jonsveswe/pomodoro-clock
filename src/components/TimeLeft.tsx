import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import React from 'react';

// @ts-ignore
momentDurationFormatSetup(moment);

const TimeLeft: React.FC<Props> = ({
  handleResetButtonClick,
  handleStartStopClick,
  startStopButtonLabel,
  timeLeft,
  timerLabel,
}) => {
  const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', { trim: false });
  
  return (
    <div>
      {(startStopButtonLabel==="Start") ?
        <div className="flex flex-col justify-evenly items-center w-64 h-64 bg-green-300 rounded-full">
          <p className="text-emerald-900 text-2xl" id="timer-label">
            {timerLabel}
          </p>
          <p className="font-clock text-4xl font-bold" id="time-left">
            {formattedTimeLeft}
          </p>
          <button
            className="text-green-200 font-semibold bg-emerald-900 px-4 py-2 rounded-lg"
            id="start_stop"
            onClick={handleStartStopClick}
          >
            {startStopButtonLabel}
          </button>
          <button
            className="border-2 text-black rounded-lg border-green-900 border-solid px-3 py-2"
            id="reset"
            onClick={handleResetButtonClick}
          >
            Reset
          </button>
        </div> :
        <div className="flex flex-col justify-evenly items-center w-64 h-64 bg-slate-900 rounded-full">
          <p className="text-black text-2xl" id="timer-label">
            {timerLabel}
          </p>
          <p className="font-clock text-4xl font-bold" id="time-left">
            {formattedTimeLeft}
          </p>
          <button
            className="text-slate-800 font-semibold bg-black px-4 py-2 rounded-lg"
            id="start_stop"
            onClick={handleStartStopClick}
          >
            {startStopButtonLabel}
          </button>
          <button
            className="border-2 text-black rounded-lg border-green-900 border-solid px-3 py-2 opacity-0"
            id="reset"
            onClick={handleResetButtonClick}
          >
            Reset
          </button>
        </div>        
      } 
    </div>
    
  );
};

type Props = {
  handleResetButtonClick: () => void;
  handleStartStopClick: () => void;
  startStopButtonLabel: string;
  timeLeft: number;
  timerLabel: string;
};

export default TimeLeft;