type ISettingsBlock = { [key: string]: string };
interface ISettings {
    'blog': ISettingsBlock;
    'skills': ISettingsBlock;
}

export const settings: ISettings = {
    blog: {
        contentDir: 'content/blog',
        baseUrl: '/blog',
        heroBasedir: '/assets/images/hero',
    },
    skills: {
        dataFile: 'data/skills.json',
    },
};
