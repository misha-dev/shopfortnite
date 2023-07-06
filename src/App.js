import { Navigate, Route, Routes } from 'react-router-dom';

import './App.css';

import { Layout } from './features';

import { ItemListPage } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/shopfortnite" element={<Layout />}>
          <Route index element={<ItemListPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/shopfortnite" />} />
      </Routes>
    </div>
  );
}

export default App;
