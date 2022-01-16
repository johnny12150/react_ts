import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import CSS from 'csstype'

// height只能在calendar內控制
const myCal: CSS.Properties = {
  marginTop: '30px',
  marginLeft: '30px',
  marginRight: '30px',
}

function App() {
  return (
      <div style={myCal}>
        <FullCalendar
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"
            height={'90vh'}
        />
      </div>
  );
}

export default App
