import React from 'react';
import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment)
const myEvents = [
    {id: 0,
  title: 'All Day Event very long title',
  allDay: true,
  // 0對應到是1月...
  start: new Date(2022, 0, 1),
  end: new Date(2022, 0, 10),}
]

// 抓出所有view的種類
let allViews = Object.values(Views)
// https://stackoverflow.com/a/69198602
console.log(allViews.map(k => Views[k as keyof typeof Views]))

function App() {
  return (
    <Calendar 
    localizer={localizer}
    defaultDate={new Date()}
    defaultView="month"
    events={myEvents}
    style={{ height: "100vh" }}
    />
  );
}

export default App;
