import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ItemList } from "./Components/ItemList/ItemList";
import { Layout } from "./Components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/shop" element={<Layout />}>
          <Route index element={<ItemList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
