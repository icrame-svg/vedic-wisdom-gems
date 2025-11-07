import { useState, useEffect } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import Home from "./Home";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has already seen loading screen in this session
    const hasSeenLoading = sessionStorage.getItem("hasSeenLoading");
    if (hasSeenLoading) {
      setIsLoading(false);
    }
  }, []);

  const handleLoadComplete = () => {
    setIsLoading(false);
    sessionStorage.setItem("hasSeenLoading", "true");
  };

  if (isLoading) {
    return <LoadingScreen onLoadComplete={handleLoadComplete} />;
  }

  return <Home />;
};

export default Index;
