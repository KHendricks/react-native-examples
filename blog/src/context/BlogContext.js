import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
    // state === array of blog posts
    // action === add_blog_post || delete_blog_post
    switch (action.type) {
        case "add_blogpost":
            return [
                ...state,
                {
                    title: `Blog Post #${state.length + 1}`,
                    id: Math.floor(Math.random() * 99999)
                }
            ];
        case "delete_blogpost":
            return state.filter(blogPost => blogPost.id !== action.payload);
        default:
            return state;
    }
};

const addBlogPost = dispatch => {
    return () => {
        dispatch({ type: "add_blogpost" });
    };
};

const deleteBlogPost = dispatch => {
    return id => {
        dispatch({ type: "delete_blogpost", payload: id });
    };
};

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost },
    []
);
