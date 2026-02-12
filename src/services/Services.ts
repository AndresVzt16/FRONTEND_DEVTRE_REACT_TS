import { isAxiosError } from "axios";
import api from "../config/axios";
import type { ProfileForm, TUser } from "../types";
import type { LoginForm } from "../types";

export async function authenticateUser(formData: LoginForm) {
  try {
    const { data } = await api.post("/auth/login", formData);
    localStorage.setItem("AUTH_TOKEN", data);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response)
      throw new Error(error.response.data.error);
  }
}

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

export async function updateProfile(ProfileData: TUser) {
  try {
    console.log(ProfileData);
    const { data } = await api.patch("/user", ProfileData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function uploadImage(file: File) {
  try {
    let formData = new FormData();
    formData.append("file", file);
    const {
      data: { image },
    }: { data: { image: string } } = await api.post("/user/image", formData);
    return image;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
