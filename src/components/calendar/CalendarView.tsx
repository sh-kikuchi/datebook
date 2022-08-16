import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list'; // 追加
import jaLocale from '@fullcalendar/core/locales/ja';
import { useSelector } from "react-redux";
import { RootState } from '../../store/index'

function CalendarView() {
  const event = useSelector((state: RootState) => state.event);
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]} // 追加
        initialView="dayGridMonth"
        // locales={[jaLocale]}
        // //locale='ja'
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek listWeek', // 追加
        }}
        events={event}
      />
    </div>
  );
}

export default CalendarView;
