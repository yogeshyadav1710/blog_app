interface AppwriteConfig {
  appwriteUrl: string;
  appwriteProjectID: string;
  appwriteDatabaseID: string;
  appwriteCollectionID: string;
  appwriteBucketID: string;
}
const conf: AppwriteConfig = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseID: String(import.meta.env.VITE_APPWRITE_DATABSE_ID),
  appwriteCollectionID: String(import.meta.env.VITE_APPWRITE_COLLECTIONT_ID),
  appwriteBucketID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default conf;
