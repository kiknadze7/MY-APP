import { Route, Routes } from "react-router-dom";

import MainPages from "./pages/MainPages";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<MainPages type={1} />} exact />
        <Route path="/userprofile/:id" element={<UserProfile />} exact />
      </Routes>
    </div>
  );
}


export default App;
