import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();

    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    };

    return (
        <div className={classes.postsBlock}>
            <div>
                <div>
                        <textarea
                            onChange={onPostChange}
                            ref={newPostElement}
                            value={props.newPostText}/>

                    <button
                        onClick={onAddPost} className={classes.btn}><span>Add post</span></button>
                </div>

            </div>
            <h3>My posts</h3>

            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;