import React from "react";
import s from "./Post.module.css";
import itemAva from "../../../../resources/personAva.jpg"

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src={itemAva}/>
            {props.msg}
            <div>
                {
                    props.likes === 1
                        ? <span>1 like</span>
                        : <span>{props.likes} likes</span>
                }

            </div>
        </div>
    )
};

export default Post;