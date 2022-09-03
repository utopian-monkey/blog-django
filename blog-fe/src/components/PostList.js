import React, { Component } from "react";
import NewPostModal from "./NewPostModal";

class PostList extends Component{
    render() {
        const posts = this.props.posts;
       
        
        return(
            
            <body>
                
               {posts.map((post,i) => (
                    
                    <div>
                        <article className="post">
                        <li key={i}>
                        <time className="time">{post.published_date}</time>
                        <h1>{post.title} </h1>
                        <p>{post.text} </p>
                        </li>
                        </article>
                    </div>
 
                ))}
                
                <NewPostModal
                    create={false}
                    post={posts.map(post=>(post))}
                    resetState={this.props.resetState}
                />
                &nbsp;&nbsp;
            </body>
        )
    }
}

export default PostList;