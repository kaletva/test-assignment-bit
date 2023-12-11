import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export const formatClientApiError = (
  error: FetchBaseQueryError | SerializedError,
): string => {
  if ("status" in error) {
    if (typeof error.data !== "undefined") {
      return `Произошла ошибка: ${JSON.stringify(error.data)}`;
    }
    return `Произошла ошибка: ${error.status}`;
  } else if ("message" in error) {
    return error.message || "Произошла неизвестная ошибка";
  } else {
    return "Произошла неизвестная ошибка";
  }
};
