import React from 'react';

export const LikeButton = () => {
	const [liked, setLiked] = React.useState(false);
	const toggleLiked = () => setLiked(!liked);

	return (
		<button className="likeButton" onClick={toggleLiked}>
			{liked ? "いいね済" : "いいね前"}
		</button>
	)
}
