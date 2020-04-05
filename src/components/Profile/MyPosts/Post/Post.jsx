import React from "react";
import s from "./Post.module.css";
import itemAva from "../../../../resources/personAva.jpg"

const Post = () => {
    return (
        <div className={s.item}>
            <img src={itemAva}/>
            post1
        </div>
    )
};

export default Post;