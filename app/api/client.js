import { create } from "apisauce";
import { store, get as cacheGet } from "../utility/cache";

const apiClient = create({
  baseURL: "http://172.20.10.9:9000/api",
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    store(url, response.data);
    return response;
  }

  const data = await cacheGet(url);
  console.log(data);
  return data ? { ok: true, data } : response;
};

export default apiClient;
