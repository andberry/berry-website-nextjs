import { NextRouter } from 'next/router';

export const isActiveUrl = (url: string, router: NextRouter) => {
    return (
        router.asPath === url || (url !== '/' && router.asPath.startsWith(url))
    );
};
