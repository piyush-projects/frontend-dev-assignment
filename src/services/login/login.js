import { Auth } from "module/authentication/auth";

export const doLogin = (userName, Password) =>
  new Promise((resolve) => {
    setTimeout(() => {
      Auth.login("Wookie2021");
      resolve(`${userName} logged in successfully`);
    }, 300);
  });
