import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import EventView from './components/events/EventView';
import CalendarView from './components/calendar/CalendarView';
import BasicBreadcrumbs from './components/util/BreadCrumb/app';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>♪datebook</h1>
        <BasicBreadcrumbs />
        <Routes>
          <Route path="/" element={<CalendarView />} />
          <Route path="/event" element={<EventView />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

//このコンポーネントからstoreにアクセス
export default App;
