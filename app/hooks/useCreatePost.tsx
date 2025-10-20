import { database, storage, ID } from "@/libs/AppWriteClient"

const useCreatePost = async (file: File, userId: string, caption: string) => {
    let videoId = Math.random().toString(36).slice(2, 22)

    try {
        await database.createDocument(
            "6661c33800264b634833", 
            "6661c42b0030620579c3", 
            ID.unique(), 
        {
            user_id: userId,
            text: caption,
            video_url: videoId,
            created_at: new Date().toISOString(),
        });
        await storage.createFile("6661c4480029518f8045", videoId, file)
    } catch (error) {
        throw error
    }
}

export default useCreatePost