import { atom } from 'recoil';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  accessToken: string;
}

export const userStore = atom<User>({
  key: 'user',
  default: {} as User,
});
