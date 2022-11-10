import React, { useState } from "react";

import "./index.css";

import samplePosts from "../../libs/data";

import Post from "../Post";

function Main() {
	const [posts, setPosts] = useState(samplePosts);

	return (
		<main id="main">
			{posts.map((post) => {
				return (
					<Post
						key={post.postId}
						title={post.title}
						date={post.data}
						author={post.author}
						text={post.text}
						highlights={post.highlights}
						image={post.image}
					></Post>
				);
			})}
		</main>
	);
}

export default Main;
