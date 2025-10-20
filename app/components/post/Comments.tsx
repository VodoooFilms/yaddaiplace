"use client"

import SingleComment from "./SingleComment"
import { CommentsCompTypes } from "@/app/types"
import { useCommentStore } from "@/app/stores/comment"
import { useUser } from "@/app/context/user"
import { BiLoaderCircle } from "react-icons/bi"
import { useEffect, useState } from "react"
import ClientOnly from "../ClientOnly"
import useCreateComment from "@/app/hooks/useCreateComment"
import { useGeneralStore } from "@/app/stores/general"

export default function Comments({ params }: CommentsCompTypes) {

    let { commentsByPost, setCommentsByPost } = useCommentStore()
    let { setIsLoginOpen } = useGeneralStore()

    const contextUser = useUser()

    const [comment, setComment] = useState<string>('')
    const [inputFocused, setInputFocused] = useState<boolean>(false)
    const [isUploading, setIsUploading] = useState<boolean>(false)

    const addComment = async () => {
        if (!contextUser?.user) return setIsLoginOpen(true)
        try {
            setIsUploading(true)
            await useCreateComment(contextUser.user.id, params.postId, comment)
            setCommentsByPost(params.postId)
            setComment('')
            setIsUploading(false)
        } catch (error) {
            console.log(error)
            setIsUploading(false)
            alert(error)
        }
    }

    useEffect(() => {
        setCommentsByPost(params.postId)
    }, [])

    return (
        <>
            <div
                id="Comments"
                className="relative z-0 w-full h-[calc(100%-273px)] flex flex-col justify-between"
            >
                <ClientOnly>
                    <div className="w-full h-full overflow-auto">
                        {commentsByPost.length < 1 ? (
                            <div className="flex items-center justify-center w-full h-full text-xl text-gray-500">
                                No comments yet.
                            </div>
                        ) : (
                            <div>
                                {commentsByPost.map((comment, index) => (
                                    <SingleComment key={index} params={params} comment={comment}/>
                                ))}
                            </div>
                        )}
                    </div>
                </ClientOnly>

                <div id="CreateComment" className="absolute flex items-center justify-between bottom-0 bg-white h-[85px] lg:max-w-[550px] w-full py-5 px-8 border-t-2">
                    <div
                        className={`
                            bg-[#F1F1F2] flex items-center rounded-lg w-full lg:max-w-[420px]
                            ${inputFocused ? 'border-2 border-gray-400' : 'border-2 border-[#F1F1F2]'}
                        `}
                    >
                        <input
                            onFocus={() => setInputFocused(true)}
                            onBlur={() => setInputFocused(false)}
                            onChange={e => setComment(e.target.value)}
                            value={comment || ''}
                            className="bg-[#F1F1F2] text-[14px] focus:outline-none w-full lg:max-w-[420px] p-2 rounded-lg"
                            type="text"
                            placeholder="Add comment..."
                        />
                    </div>
                    {!isUploading ? (
                        <button
                            disabled={!comment}
                            onClick={() => addComment()}
                            className={`
                                font-semibold text-sm ml-5 pr-1
                                ${comment ? 'text-[#F02C56] cursor-pointer' : 'text-gray-400'}
                            `}
                        >
                            Send
                        </button>
                    ) : (
                        <BiLoaderCircle className="animate-spin" color="#E91E62" size={20} />
                    )}
                </div>
            </div>
        </>
    )
}
