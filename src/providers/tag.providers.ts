
    import { Tag } from '../models/tag.entity';

    export const tagsProviders = [
    {
        provide: 'TAG_REPOSITORY',
        useValue: Tag,
    },
    ];
    