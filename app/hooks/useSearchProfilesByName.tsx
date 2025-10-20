import { database, Query } from "@/libs/AppWriteClient"

const useSearchProfilesByName = async (name: string) => {
    try {
        const profileResult = await database.listDocuments(
            "6661c33800264b634833", 
            "6661c35600214a1c5331", 
            [ 
                Query.limit(5),
                Query.search("name", name)
            ]
        );

        const objPromises = profileResult.documents.map(profile => {
            return {
                id: profile?.user_id,  
                name: profile?.name,
                image: profile?.image,
            }
        })

        const result = await Promise.all(objPromises)
        return result
    } catch (error) {
        console.log(error)
    }
}

export default useSearchProfilesByName