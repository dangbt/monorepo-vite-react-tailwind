import { instance } from "./axios";

const ENDPOINT = {
  GET_USERS: "/get-all-user",
};
export const getUsers = () => {
  return instance.get(ENDPOINT.GET_USERS + "?limit=10&page=1");
};
