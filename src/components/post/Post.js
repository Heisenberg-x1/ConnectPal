import React from 'react'
import "./post.css"
import { FaEllipsisVertical } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa6";

function Post() {
    return (
        <div className='post'>
            <div className='postWrapper'>
                <div className='postTop'>
                    <div className='postTopLeft'>
                        <img className='postProfile' src="https://www.redwolf.in/image/cache/catalog/stickers/rick-and-morty-rick-head-sticker-600x800.jpg" alt="post profile" />
                        <span className='postUsername'>Grandpa Rick</span>
                        <span className='postTime'>4 mins ago</span>
                    </div>
                    <div className='postTopRight'>
                        <FaEllipsisVertical />
                    </div>
                </div>
                <div className='postCenter'>
                    <span className='postText'>Hey, I'm Grandpa Rick!!</span>
                    <img className='postImg' src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/07/29/14/rick-and-morty-season-3.jpg" alt="post" />
                </div>
                <div className='postBottom'>
                    <div className='postBottomLeft'>
                        <FaHeart className='heart' />
                        <FaThumbsUp className='thumbsUp' />
                        <span className='postLikeCounter'>70 likes</span>
                    </div>
                    <div className='postBottomRigt'>
                        <span className='postCommentText'>14 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
