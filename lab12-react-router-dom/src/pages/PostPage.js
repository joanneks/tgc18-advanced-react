import { Fragment, useState, useEffect } from "react";
import axios from "axios";

export default function PostPage(props) {

    const [activePostId, setActivePostId] = useState("");
    const [post, setPost] = useState(null);

    // replicate componentDidUpdate
    // useEffect has 2 arguments
    // 1st argument: the function to call when any of the dependencies changed
    // 2nd argument: an array of dependencies
    useEffect(() => {

        const fetchPost = async (postId) => {
            if (postId > 0) {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + postId);
                setPost(response.data);
            }
        }
        fetchPost(activePostId);

    }, [activePostId]);

    // replicate ComponentDidMount
    useEffect(()=>{
        console.log("First render")
    }, []);  // <-- empty array means the useEffect only activates once

    return <Fragment>
        <h1>Posts</h1>
        <input type="text" name="activePostId"
            value={activePostId}
            onChange={(e) => {
                setActivePostId(e.target.value);
            }}
        />
        {
            post ? <Fragment>
                <div>
                    <h1>ID: {post.id}</h1>
                    <h1>Title: {post.title}</h1>
                    <p>
                        {post.body}
                    </p>
                </div>
            </Fragment> : null
        }
    </Fragment>

}