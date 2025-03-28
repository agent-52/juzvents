import { useState, useEffect } from "react";

const useEvents = () => {
  const [events, setEvents] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://extensive-erda-alivedevs-0efdb804.koyeb.app/", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        
        return response.json();
        
      })
      .then((response) => setEvents(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { events, error, loading };
};

export default useEvents
