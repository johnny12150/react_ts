import React from 'react'
import FullCalendar, {ToolbarInput} from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import CSS from 'csstype'

// height只能在calendar內控制
// https://www.kindacode.com/snippet/react-typescript-using-inline-styles-correctly/
const myCal: CSS.Properties = {
  marginTop: '30px',
  marginLeft: '30px',
  marginRight: '30px',
}

const myHear: ToolbarInput = {
    right:'dayGridMonth,timeGridWeek,listWeek'
}

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
            // headerToolbar={myHear}
            height={'90vh'}
        />
      </div>
  );
}

export default App
