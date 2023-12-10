/**
 * @file auth.ts
 * @author Higor Grigorio <higorgrigorio@gmail.com>
 * @date 2023-11-30
 *
 * @changelog
 *  - 2023-11-30 - Higor Grigorio
 *    - Create auth.ts.
 */

import { Api } from "./api";

export async function signIn(email: string, password: string) {
  //  return new Promise((resolve, reject) => {
  //    setTimeout(() => {
  //      resolve({
  //        id: 1,
  //        name: "John Doe",
  //        email: "john.doe@gmail.com",
  //        experience:
  //          "I'm a full-stack web developer with 5 years of experience.",
  //        phone: "+1 234 567 890",
  //        profile:
  //          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.",
  //        createdAt: "2021-09-25T00:00:00.000000Z",
  //        updatedAt: "2021-09-25T00:00:00.000000Z",
  //        avatar:
  //          "https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80",
  //        coverImage:
  //          "https://images.unsplash.com/photo-1484589065579-248aad0d8b13?q=80&w=1959&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //      });
  //    }, 0);
  //  });
  const tokenResult = await Api.builder()
    .usePost()
    .useUrl("/v1/users/token")
    .useValues({
      email,
      password,
    })
    .useDefaultHeaders()
    .fecth();

  console.log(tokenResult);
}

export async function signUp(
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
  phone: string
) {
  if (password != confirmPassword) {
    return {};
  }

  return await Api.builder()
    .usePost()
    .useUrl("/v1/users/create/")
    .useValues({
      name,
      email,
      password,
      phone,
    })
    .useDefaultHeaders()
    .fecth();
}

export async function signOut() {}

export default {
  signIn,
  signUp,
  signOut,
};
