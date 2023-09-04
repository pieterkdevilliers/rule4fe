import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import SnapshotListPage from './pages/SnapshotListPage';
import AOLListPage from './pages/AOLListPage';
import AOLPage from './pages/AOLPage';
import SnapshotPage from './pages/SnapshotPage';
import TodayPage from './pages/TodayPage';
import AddAOLPage from './pages/AddAOLPage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import AddSnapshotPage from './pages/AddSnapshotPage';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Routes>
          <Route path="/snapshots/register" exact element={<RegistrationPage />} />
          <Route path="/snapshots/login" exact element={<LoginPage />} />
          <Route path="/aols" exact element={<AOLListPage />} />
          <Route path="/aols/:id" exact element={<AOLPage />} />
          <Route path="/snapshots" exact element={<SnapshotListPage />} />
          <Route path="/snapshots/:id" exact element={<SnapshotPage />} />
          <Route path="/today/:id" exact element={<TodayPage />} />
          <Route path="/aols/add" exact element={<AddAOLPage />} />
          <Route path="/snapshots/add/:todayId" exact element={<AddSnapshotPage />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
