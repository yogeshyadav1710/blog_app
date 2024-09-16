import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

const client: Client = new Client()
  .setEndpoint(conf.appwriteUrl)
  .setProject(conf.appwriteProjectID);

const account: Account = new Account(client);

export default account;
