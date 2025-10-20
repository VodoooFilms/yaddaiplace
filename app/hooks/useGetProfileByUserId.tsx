import { database, Query } from "@/libs/AppWriteClient"

const useGetProfileByUserId = async (userId: string) => {
    try {
        const response = await database.listDocuments(
            "6661c33800264b634833", 
            "6661c35600214a1c5331", 
            [ 
                Query.equal('user_id', userId) 
            ]
        );
        const documents = response.documents;
        return {
            id: documents[0]?.$id,
            user_id: documents[0]?.user_id,
            name: documents[0]?.name,
            image: documents[0]?.image,
            bio: documents[0]?.bio
        }
      } catch (error) {
          throw error
      }
}

export default useGetProfileByUserId