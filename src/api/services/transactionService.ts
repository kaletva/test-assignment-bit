import { ITransaction } from "@/types";
import { appApi } from "../appApi";

const transactionService = appApi.injectEndpoints({
  endpoints: (builder) => ({
    userTransactions: builder.query<ITransaction[], string | undefined>({
      query: (userId) => ({
        url: `/user/${userId}/transactions`,
      }),
    }),
  }),
});

export const { useUserTransactionsQuery } = transactionService;
