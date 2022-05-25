import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { ItemList } from "./Components/ItemList/ItemList";
import { Layout } from "./Components/Layout/Layout";
import { useFetch } from "./hooks/useFetch";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/shopfortnite" element={<Layout />}>
          <Route index element={<ItemList />} />
        </Route>
        <Route path="*" element={<Navigate to="/shopfortnite" />} />
      </Routes>
    </div>
  );
}

export default App;
