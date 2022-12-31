import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';

export const fetchComments = createAsyncThunk('comments/fetchComments', async () => {
    const response = await fetch(`${baseUrl}comments`);
    if (!response.ok) {
        return Promise.reject(new Error(`Unable to fetch, status: ${response.status}`));
    }
    const data = await response.json();
    return data;
});

export const postComment = createAsyncThunk('comments/postComments', async (comment, { dispatch }) => {
    const response = await fetch(`${baseUrl}comments`, {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
        return Promise.reject(new Error(`Unable to post, status: ${response.status}`));
    }
    const data = await response.json();
    dispatch(addComment(data));
});

const initialState = {
    commentsArray: [],
    isLoading: true,
    errMsg: '',
};

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addComment: (state, action) => {
            const newComment = {
                id: state.commentsArray.length + 1,
                ...action.payload,
            };
            state.commentsArray.push(newComment);
        },
    },
    extraReducers: {
        [fetchComments.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchComments.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.commentsArray = action.payload;
            state.errMsg = '';
        },
        [fetchComments.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        },
        [postComment.rejected]: (state, action) => {
            alert(`Your comment coud not be posted \n Error:${action.error ? action.error.message : 'Post Failed.'}`);
        },
    },
});

export const commentsReducer = commentsSlice.reducer;

export const { addComment } = commentsSlice.actions;

export const selectCommentsByCampsiteId = (campsiteId) => {
    return (state) => {
        return state.comments.commentsArray.filter((comment) => {
            return comment.campsiteId === parseInt(campsiteId);
        });
    };
};
