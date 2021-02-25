import { Auth } from "module/authentication/auth";

export const doLogin = (userName, password) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userName === 'admin' && password === '1234') {
        Auth.login("Wookie2021");
        resolve(`${userName} logged in successfully`);
      } else {
        reject('Incorrect user name or password');
      }
      
    }, 300);
  });
