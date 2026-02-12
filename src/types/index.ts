export type TUser = {
  _id: string;
  handle: string;
  name: string;
  email: string;
  description: string;
  token: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  imageId:string;
  links:string
};

export type RegisterForm = Pick<TUser, "handle" | "email" | "name"> & {
  password: string;
  password_confirmation: string;
};

export type LoginForm = Pick<TUser, "email"> & {
  password: string;
};

export type ProfileForm = Pick<TUser, "handle" | "description" | 'name'>;

export type SocialNetwork = {
  id: Number;
  name: string;
  url: string;
  enabled: boolean;
};

export type DevtreeLink = Pick<SocialNetwork, "enabled" | "name" | "url">;
