import { database, Query } from "@/libs/AppWriteClient";

const getCommentsByPostId = async (post_id: string) => {
  try {
    const response = await database.listDocuments(
      String(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID),
      String(process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_COMMENTS_ID),
      [Query.equal("post_id", post_id)]
    );

    return response.documents;
  } catch (error) {
    throw error;
  }
};

export default getCommentsByPostId;
