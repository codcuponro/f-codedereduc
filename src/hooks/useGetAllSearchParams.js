import { useState, useEffect } from "react";

function useGetAllSearchParams() {
  const [params, setParams] = useState({});

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const paramObj = {};
    searchParams.forEach((value, key) => {
      paramObj[key] = value;
    });
    setParams(paramObj);
  }, []);

  return params;
}

export default useGetAllSearchParams;
