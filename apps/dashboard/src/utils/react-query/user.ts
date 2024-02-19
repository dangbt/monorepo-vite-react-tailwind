import { queryOptions } from "@tanstack/react-query";
import { getUsers } from "@/axios";

export const usersQueryOptions = () =>
  queryOptions({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });
