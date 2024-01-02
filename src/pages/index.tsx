import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";

export const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};