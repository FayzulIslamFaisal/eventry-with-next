"use server";

import { redirect } from "next/navigation";
import { createUser, findUserByCredentials } from "../db/queries";

async function registerUser(formData) {
  console.log("form Data", { formData });

  const user = Object.fromEntries(formData);
  console.log("user", { user });

  const created = await createUser(user);
  redirect("/login");
}

async function performLogin(formData) {
  try {
    const credential = {};
    credential.email = formData.get("email");
    credential.password = formData.get("password");
    const found = await findUserByCredentials(credential);
    return found;
  } catch (error) {
    throw error;
  }
}

export { registerUser, performLogin };
