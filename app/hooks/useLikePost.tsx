import { database, ID } from '../../libs/AppWriteClient';

const useLikePost = async (postId: string, userId: string, likes: string[]) => {
    try {
        const currentLikes = likes.includes(userId) ? likes.filter((like) => like !== userId) : [...likes, userId];

        await database.updateDocument(
            String(process.env.NEXT_PUBLIC_DATABASE_ID),
            String(process.env.NEXT_PUBLIC_COLLECTION_ID_POST),
            postId,
            { likes: currentLikes }
        );
    } catch (error) {
        throw error;
    }
};

export default useLikePost;