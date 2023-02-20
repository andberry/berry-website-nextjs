export interface IBlogPost {
    url: string;
    title: string;
    abstract: string;
    createdAt: string;
    createdAtDisplay: string;
    published: boolean;
    tags?: string[];
    heroImage: string;
    content: string;
}
