export default ( posts, {text}) => {
    return posts.filter((post) => {
        const textMatch = post.description.toLowerCase().includes(text.toLowerCase()) ||post.title.toLowerCase().includes(text.toLowerCase());

        return textMatch;
    });
}