export interface BlogPost {
    title: string;
    abstract?: string;
    createdAt: string;
    createdAtDisplay: string;
    published: boolean;
    tags: string[];
    heroImage: string;
    content: string;
}
