
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => useQuery({
  queryKey: ['genres'],
  queryFn: () => apiClient
    .get<FetchResponse<Platform>>('/platforms/lists/parents').then(res => res.data),
  staleTime: 24 *60 * 60 *100, //24h
  initialData : {count: platforms.length, results: platforms}
})

export default usePlatforms;
