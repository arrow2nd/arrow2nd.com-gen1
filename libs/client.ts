import { createClient } from "microcms-js-sdk";

export const Client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN || "",
  apiKey: process.env.API_KEY || ""
});
