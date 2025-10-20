import { database, ID } from "@/libs/AppWriteClient"

const useCreateComment = async (userId: string, postId: string, comment: string) => {
    try {
        await database.createDocument(
            "6661c33800264b634833", 
            "6661c4d4001d9600e121", 
            ID.unique(), 
        {
            user_id: userId,
            post_id: postId,
            text: comment,
            created_at: new Date().toISOString(),
        });
    } catch (error) {
        throw error
    }
}

export default useCreateComment