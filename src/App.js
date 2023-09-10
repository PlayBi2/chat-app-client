import publicRoute from "./config/routes";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoute.map((item, index) => {
          return <Route key={index} path={item.path} element={<item.component />} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
