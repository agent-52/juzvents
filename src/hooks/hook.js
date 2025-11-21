// hooks/useEvents.js
import { useQuery } from "@tanstack/react-query";

const EVENTS_URL = "https://extensive-erda-alivedevs-0efdb804.koyeb.app/";

async function fetchEvents() {
  const res = await fetch(EVENTS_URL, { mode: "cors" });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Failed to fetch events: ${res.status} ${text}`);
  }
  return res.json();
}

export default function useEvents() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
    // ensure first load happens; these can stay or be adjusted
    // staleTime: 1000 * 60 * 5,
    // refetchOnMount: false,
  });

  

  return {
    // return an empty array instead of null so consumers can map safely
    events: data ?? [],
    isLoading,
    error: isError ? error : null,
  };
}
