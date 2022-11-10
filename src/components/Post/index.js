import React from "react";

import "./index.css";

function Post({title, author, date, image, text, highlights}) {
	return <article>
		<h1>{title}</h1>
		<h2>{author}</h2>
		<p>{date}</p>
		<img src={image.link} alt={image.alt}></img>
		<p>{text}</p>
		{highlights.map((highlight) => {
			return <li>{highlight}</li> 
		})}
	</article>;
}

export default Post;
