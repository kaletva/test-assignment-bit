import { appApi } from "@/api";
import { IPaginatedData, IUser, IUsersSearchParams } from "@/types";

export const userService = appApi.injectEndpoints({
  endpoints: (builder) => ({
    userList: builder.query<IPaginatedData<IUser>, IUsersSearchParams>({
      query: (args) => ({
        url: "/user/list",
        params: args,
      }),
    }),
  }),
});

export const { useUserListQuery } = userService;
