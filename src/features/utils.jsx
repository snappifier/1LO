import deburr from 'lodash/deburr';

export function slugify(title, id){
    return (
        deburr(title)
            .toLowerCase()
            .replace(/[^a-z0-9 -]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-') + '-' + id
    );
};