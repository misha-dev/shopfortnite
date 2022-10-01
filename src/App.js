import { Navigate, Route, Routes } from "react-router-dom";

import "./App.css";
import { ItemList } from "./Components/ItemList/ItemList";
import { Layout } from "./Components/Layout/Layout";
import { useCartContext } from "./hooks/useCartContext";

function App() {
  const { context } = useCartContext();
  return (
    <div className="App">
      {context && (
        <Routes>
          <Route path="/shopfortnite" element={<Layout />}>
            <Route index element={<ItemList />} />
          </Route>
          <Route path="*" element={<Navigate to="/shopfortnite" />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
