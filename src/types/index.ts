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
  imageId: string;
  links: string;
  tags: string;
  location: string;
};

export type UserHandle = Pick<
  TUser,
  "description" | "handle" | "image" | "links" | "tags" | "location" | "name" | "email"
>;

export type RegisterForm = Pick<TUser, "handle" | "email" | "name"> & {
  password: string;
  password_confirmation: string;
};

export type LoginForm = Pick<TUser, "email"> & {
  password: string;
};

export type TagSkill = {
  skill: string;
};
export type ProfileForm = Pick<
  TUser,
  "handle" | "description" | "name" | "location"
>;

export type SocialNetwork = {
  id: number;
  name: string;
  url: string;
  enabled: boolean;
};

export type DevtreeLink = Pick<SocialNetwork, "enabled" | "name" | "url">;
