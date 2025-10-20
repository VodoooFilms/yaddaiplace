import { database, Query, storage } from "@/libs/AppWriteClient"
import useDeleteComment from "./useDeleteComment";
import useDeleteLike from "./useDeleteLike";
import useGetCommentsByPostId from "./useGetCommentsByPostId";
import useGetLikesByPostId from "./useGetLikesByPostId";

const useDeletePostById = async (postId: string, currentImage: string) => {
    try {
        const likes = await useGetLikesByPostId(postId)
        likes.forEach(async like => { await useDeleteLike(like?.id) })
        
        const comments = await useGetCommentsByPostId(postId)
        comments.forEach(async comment => { await useDeleteComment(comment?.id) })

        await database.deleteDocument(
            "6661c33800264b634833", 
            "6661c42f0035f1b997c7", 
            postId
        );
        await storage.deleteFile("6661c390001f930514a6", currentImage);
    } catch (error) {
        throw error
    }
}

export default useDeletePostById