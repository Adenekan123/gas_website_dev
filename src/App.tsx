import { Route, Routes } from "react-router-dom";
import "./index.css";
import { Home, Resseller, Shop, Support } from "./_root/pages";
import { Wrapper } from "./components/ui";
function App() {
  return (
    <Routes>
      <Route path="" element={<Wrapper />}>
        <Route path="" index element={<Home />} />
        <Route path="/shop"  element={<Shop />} />
        <Route path="/reseller"  element={<Resseller />} />
        <Route path="/support"  element={<Support />} />
      </Route>
    </Routes>
  );
}

export default App;
