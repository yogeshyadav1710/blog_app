import services from "./auth";
import conf from "../conf/conf";
import { Query } from "appwrite";

interface createPostParams {
  title: string;
  slug: string;
  content: string;
  featuredImage: string;
  status: string;
  userId: string;
}
interface UpdatePostParams {
  title: string;
  content: string;
  featuredImage: string;
  status: string;
}
/* function to create a new blog */
async function createPost({
  title,
  slug,
  content,
  featuredImage,
  status,
  userId,
}: createPostParams): Promise<any> {
  try {
    return await services.databases.createDocument(
      conf.appwriteDatabaseID,
      conf.appwriteCollectionID,
      slug, // using slug for document id
      {
        title,
        content,
        featuredImage,
        status,
        userId,
      }
    );
  } catch (error) {
    console.log("Appwrite service :: createPost :: error", error);
  }
}
/* function to update the post*/
async function updatePost(
  slug: string,
  { title, content, featuredImage, status }: UpdatePostParams
): Promise<any> {
  try {
    return await services.databases.updateDocument(
      conf.appwriteDatabaseID,
      conf.appwriteCollectionID,
      slug,
      {
        title,
        content,
        featuredImage,
        status,
      }
    );
  } catch (error) {
    console.log("Appwrite service :: updatePost :: error", error);
  }
}
async function deletePost(slug: string): Promise<any> {
  try {
    await services.databases.deleteDocument(
      conf.appwriteDatabaseID,
      conf.appwriteCollectionID,
      slug
    );
    return true; // since because of awit it will something and deleteDocument will return
    //that document datawhich we deleted so intead of that we will retur true and handle in frontend if getting false or true
  } catch (error) {
    console.log("Appwrite service :: deletePost :: error", error);
    return false; //  if document did not deleted
  }
}
/* to get one post */
async function getPost(slug: string): Promise<any> {
  try {
    return await services.databases.getDocument(
      conf.appwriteDatabaseID,
      conf.appwriteCollectionID,
      slug // get the document using document id and we are using slug as document id
    );
  } catch (error) {
    console.log("Appwrite service :: getPost :: error", error);
    return false;
  }
}

/* function to get list of blog with active status using queries*/
async function getPosts(
  queries = [Query.equal("status", "active")]
): Promise<any> {
  try {
    return await services.databases.listDocuments(
      conf.appwriteDatabaseID,
      conf.appwriteCollectionID,
      queries
    );
  } catch (error) {
    console.log("Appwrite Service :: getPosts :: error", error);
    return false;
  }
}


export { createPost, updatePost, deletePost, getPost, getPosts };
