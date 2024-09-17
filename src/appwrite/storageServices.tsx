import { ID } from "appwrite";
import conf from "../conf/conf";
import services from "./auth";

/* file upload services */
async function uploadFile(file: File): Promise<any> {
  try {
    return await services.storage.createFile(
      conf.appwriteBucketID,
      ID.unique(),
      file
    );
  } catch (error) {
    console.log("Appwrite service :: uploadFIle :: error", error);
    return false;
  }
}

/* file delete services */
async function deleteFIle(fileID: string): Promise<any> {
  try {
    await services.storage.deleteFile(conf.appwriteBucketID, fileID);
    return true;
  } catch (error) {
    console.log("Appwrite service :: uploadFIle :: error", error);
    return false;
  }
}

/* async function for file preview */
function getFilePreview(fileID: string) {
  return services.storage.getFilePreview(conf.appwriteBucketID, fileID);
}

export default { uploadFile, deleteFIle, getFilePreview };
