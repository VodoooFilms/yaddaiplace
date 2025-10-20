import { database, Query } from "@/libs/AppWriteClient"

const useGetLikesByPostId = async (postId: string) => {
    try {
        const response = await database.listDocuments(
            "6661c33800264b634833", 
            "6661c4b7002e10c0e515", 
            [ 
                Query.equal('post_id', postId) 
            ]
        );
        const documents = response.documents;
        const result = documents.map(doc => {
            return { 
                id: doc?.$id, 
                user_id: doc?.user_id,
                post_id: doc?.post_id
            }
        })
        
        return result
    } catch (error) {
        throw error
    }
}

export default useGetLikesByPostId