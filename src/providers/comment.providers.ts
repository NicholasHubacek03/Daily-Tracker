
    import { Comment } from '../models/comment.entity';

    export const commentsProviders = [
    {
        provide: 'COMMENT_REPOSITORY',
        useValue: Comment,
    },
    ];
    