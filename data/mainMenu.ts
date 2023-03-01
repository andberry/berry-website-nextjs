interface IMenuItem {
    href: string;
    title: string;
}

export const mainMenu: IMenuItem[] = [
    {
        href: '/',
        title: 'Home',
    },
    {
        href: '/skills',
        title: 'Skills',
    },
    {
        href: '/blog',
        title: 'Blog',
    },
];
