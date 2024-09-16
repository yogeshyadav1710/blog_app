import { ID } from "appwrite";
import services from "./auth";

interface createAccountParams {
  email: string;
  password: string;
  name: string;
}
interface loginParams {
  email: string;
  password: string;
}

/* account/authentication related api's/methods */
async function createAccount({
  email,
  password,
  name,
}: createAccountParams): Promise<any> {
  try {
    const userAccount = await services.account.create(
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
    return await services.account.createEmailPasswordSession(email, password);
  } catch (error) {
    return error;
  }
}

async function getCurrentUser(): Promise<any> {
  try {
    return await services.account.get();
  } catch (error) {
    console.log("Appwrite service :: getCurrentUser :: error", error);
  }
  return null;
}

async function logout(): Promise<any> {
  try {
    await services.account.deleteSessions();
  } catch (error) {
    console.log("Appwrite service :: logout :: error", error);
  }
}
export default { createAccount, login, getCurrentUser, logout };
