import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CountView from './components/count/countView'
import ExpenseView from './components/expense/ExpenseView';
import BasicBreadcrumbs from './components/util/BreadCrumb/app';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>React Expo</h1>
        <BasicBreadcrumbs />
        <Routes>
          <Route path="/" element={<CountView />} />
          <Route path="/expense" element={<ExpenseView />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

//このコンポーネントからstoreにアクセス
export default App;
