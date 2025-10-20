import { database, Query } from '../../libs/AppWriteClient';

const useGetProfileById = async (id: string) => {
    try {
        const response = await database.listDocuments(
            String(process.env.NEXT_PUBLIC_DATABASE_ID),
            String(process.env.NEXT_PUBLIC_COLLECTION_ID_PROFILE),
            [Query.equal('user_id', id)]
        );
        return response.documents[0];
    } catch (error) {
        throw error;
    }
};

export default useGetProfileById;