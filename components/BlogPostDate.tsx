export interface IBlogPostDate extends React.ComponentPropsWithoutRef<'time'> {
    displayDate: string;
}

export const BlogPostDate = ({ dateTime, displayDate }: IBlogPostDate) => {
    return (
        <time dateTime={dateTime} className="inline-block mt-3 text-sm">
            {displayDate}
        </time>
    );
};
