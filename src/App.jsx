import { useEffect } from "react";
import { Outlet } from "react-router-dom";

function App() {
  useEffect(() => {
    document.title = "Martian Market";
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
