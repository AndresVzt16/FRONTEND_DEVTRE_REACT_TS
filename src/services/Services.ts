import { isAxiosError } from "axios";
import api from "../config/axios";
import type { TUser } from "../types";

export async function getUser() {
  try {
    const { data } = await api<TUser>("/user");
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function activateAccout(token: string) {
  try {
    const { data } = await api(`/auth/account-activate/${token}`);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
