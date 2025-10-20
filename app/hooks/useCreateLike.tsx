import { database, ID } from "@/libs/AppWriteClient"

const useCreateLike = async (userId: string, postId: string) => {
    try {
        await database.createDocument(
            "6661c33800264b634833", 
            "6661c4b7002e10c0e515", 
            ID.unique(), 
        {
            user_id: userId,
            post_id: postId,
        });
    } catch (error) {
        throw error
    }
}

export default useCreateLike