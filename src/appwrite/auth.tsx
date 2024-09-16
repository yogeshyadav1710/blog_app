import conf from "../conf/conf";
import { Client, Account, ID, Databases, Storage } from "appwrite";

const client: Client = new Client()
  .setEndpoint(conf.appwriteUrl)
  .setProject(conf.appwriteProjectID);

const account: Account = new Account(client);
const databases: Databases = new Databases(client);
const storage: Storage = new Storage(client);

export default { account, databases, storage };
