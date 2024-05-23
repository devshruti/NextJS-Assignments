import React from "react";

const Post = ({params}) => {
//    console.log(props)
    return (
        <div>
            <h1>Blog Post {params.id}</h1>
            <p></p>
        </div>
    );
}

export default Post;