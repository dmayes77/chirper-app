export function formatDate(timestamp) {
	const d = new Date(timestamp);
	const time = d.toLocaleTimeString('en-US');
	return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString();
}

export function formatChirp(chirp, author, authedUser, parentChirp) {
	const { id, likes, replies, text, timestamp } = chirp;
	const { name, avatarURL } = author;

	return {
		name,
		id,
		timestamp,
		text,
		avatar: avatarURL,
		likes: likes.length,
		replies: replies.length,
		hasLiked: likes.includes(authedUser),
		parent: !parentChirp
			? null
			: {
					author: parentChirp.author,
					id: parentChirp.id,
			  },
	};
}
