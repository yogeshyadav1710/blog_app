import { ID } from "appwrite";
import account from "./auth";

interface createAccountParams {
  email: string;
  password: string;
  name: string;
}
interface loginParams {
  email: string;
  password: string;
}

async function createAccount({
  email,
  password,
  name,
}: createAccountParams): Promise<any> {
  try {
    const userAccount = await account.create(
      ID.unique(),
      email,
      password,
      name
    );
    if (userAccount) {
      // login the user here only after creating account
      return login({ email, password });
    } else {
      return userAccount;
    }
  } catch (error) {
    return error;
  }
}

async function login({ email, password }: loginParams): Promise<any> {
  try {
    return await account.createEmailPasswordSession(email, password);
  } catch (error) {
    return error;
  }
}

async function getCurrentUser(): Promise<any> {
  try {
    return await account.get();
  } catch (error) {
    console.log("Appwrite service :: getCurrentUser :: error", error);
  }
  return null;
}

async function logout(): Promise<any> {
  try {
    await account.deleteSessions();
  } catch (error) {
    console.log("Appwrite service :: logout :: error", error);
  }
}
export default { createAccount, login, getCurrentUser, logout };
