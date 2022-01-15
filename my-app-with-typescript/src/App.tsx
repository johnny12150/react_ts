import React, {FunctionComponent, ReactNode} from 'react';
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
// let allViews = Object.values(Views)
// https://stackoverflow.com/a/69198602
// console.log(allViews.map(k => Views[k as keyof typeof Views]))

// component type, https://stackoverflow.com/a/57062512
// children type, https://stackoverflow.com/a/57253387
//  Object destructuring的type設定, https://flaviocopes.com/typescript-object-destructuring/
// React cloneElment type, https://stackoverflow.com/a/42261933
const ColoredDateCellWrapper: FunctionComponent = ({children}: {children?: ReactNode}) =>
    React.cloneElement(React.Children.only(children) as React.ReactElement<any>, {
      style: {
        backgroundColor: 'lightgray',
      },
    })

function App() {
  return (
    <Calendar 
    localizer={localizer}
    defaultDate={new Date()}
    defaultView="month"
    events={myEvents}
    style={{ height: "100vh" }}
    components={{
        // 會影響到有grid cell的
        timeSlotWrapper: ColoredDateCellWrapper,
    }}
    />
  );
}

export default App;
