import React from "react";
import { useLocation } from "react-router-dom";

const IndividualPage = () => {
  const location = useLocation();
  const { state } = location;
  return <div>
    {state.title}
  </div>;
};

export default IndividualPage;
