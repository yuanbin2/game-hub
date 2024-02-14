import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "def7d2e15a7e49c691b5ec85798164cc",
  },
});
