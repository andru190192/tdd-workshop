import { UserInfoInterface } from "./interfaces/user.interface";

export const getUserProfile = async (
  user: string
): Promise<UserInfoInterface | null> => {
  try {
    const urlService = `https://api.github.com/users/${user}`;
    const data = await fetch(urlService);
    return await data.json();
  } catch (error) {
    return null;
  }
};
