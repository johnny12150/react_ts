import React from 'react'
import FullCalendar, {ToolbarInput} from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import CSS from 'csstype'
import {EventSourceInput} from "@fullcalendar/common";

// height只能在calendar內控制
// https://www.kindacode.com/snippet/react-typescript-using-inline-styles-correctly/
const myCal: CSS.Properties = {
  marginTop: '30px',
  marginLeft: '30px',
  marginRight: '30px',
}

const myEvents: EventSourceInput = [{
    title: 'First event', date: '2022-01-15'
}, {
    title: 'Second event', start: '2022-01-18', end: '2022-01-22'
}, {
    // UTC+8
    title: 'Third event', date: '2022-01-30T12:00:00+08:00',
}
]

function App() {
  return (
      <div style={myCal}>
        <FullCalendar
            plugins={[ dayGridPlugin, timeGridPlugin, listPlugin ]}
            initialView="dayGridMonth"
            headerToolbar={{
                center: 'title',
                start: 'today prev,next',
                // 不能有空格會導致按鈕變形
                right:'dayGridMonth,timeGridWeek,listWeek',
            }}
            height={'90vh'}
            events={myEvents}
        />
      </div>
  );
}

export default App
