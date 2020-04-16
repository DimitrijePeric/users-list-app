import axios from "axios";
import { default as configuration } from "./api/configuration";

export default axios.create({
  baseURL: configuration.baseUrl,
});
