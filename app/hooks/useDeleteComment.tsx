import { database } from "@/libs/AppWriteClient"

const useDeleteComment = async (id: string) => {
    try {
        await database.deleteDocument(
            "6661c33800264b634833", 
            "6661c4d4001d9600e121", 
            id
        );
    } catch (error) {
        throw error
    }
}

export default useDeleteComment