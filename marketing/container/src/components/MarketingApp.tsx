import { mount } from "marketing/MarketingApp";
import { useEffect, useRef } from "react";

export const MarketingApp = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rootElement = ref.current;
    if (rootElement) {
      mount(rootElement);
    }
  }, []);

  return <div ref={ref} />;
};
