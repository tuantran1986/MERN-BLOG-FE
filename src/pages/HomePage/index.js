import React from 'react';
import PostList from '../../components/PostList';


export default function HomePage(props) {


    // RENDER
    return (
        <>
            <PostList postList={props.postList} />
        </>
    )
}
