import { database } from "@/libs/AppWriteClient"

const useDeleteLike = async (id: string) => {
    try {
        await database.deleteDocument(
            "6661c33800264b634833", 
            "6661c4b7002e10c0e515", 
            id
        );
    } catch (error) {
        throw error
    }
}

export default useDeleteLike