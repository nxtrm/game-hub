import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}


export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "",
  },
});

//6659512cfc624ecb8b49149ee4ef4358