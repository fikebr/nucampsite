import { COMMENTS } from '../../app/shared/COMMENTS';

export const selectCommentsByCampsiteId = (campsiteId) =>
        COMMENTS.filter((comment) => comment.campsiteId === parseInt(campsiteId));
