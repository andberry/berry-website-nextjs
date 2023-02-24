import { settings } from '../data/settings';

export const getBlogPostAbsoluteUrl = (slug: string): string => {
    return `${settings.blog.baseUrl}/${slug}`;
};

/**
 * Returns data in valid format for html <time> element,
 * given a date in yyyymmdd format (eg. 20220311),
 */
export const getSemanticHtmlDate = (date: string): string => {
    if (date.length !== 8) {
        return '';
    }

    return `${date}.slice(0, 4)}-${date}.slice(4, 6)}-${date}.slice(6, 8)}`;
};
