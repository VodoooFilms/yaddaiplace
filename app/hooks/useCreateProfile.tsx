import { database, ID } from "@/libs/AppWriteClient"

const useCreateProfile = async (userId: string, name: string, image: string, bio: string) => {
    try {
        await database.createDocument(
            "6661c33800264b634833", 
            "6661c35600214a1c5331",
            ID.unique(), 
        {
            user_id: userId,
            name: name,
            image: image,
            bio: bio,
        });
    } catch (error) {
        throw error
    }
}

export default useCreateProfile