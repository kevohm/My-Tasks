import React, { useEffect, useRef } from "react";

const useRenderCount = () => {
  const count = useRef(0);
  useEffect(() => {
    count.current++;
  }, []);
  return {
    count,
    CountComponent: (
      <button className="bg-slate-600 min-w-6 min-h-6 rounded-full w-6 h-6 text-sm text-white">
        {count.current}
      </button>
    ),
  };
};

export default useRenderCount;
