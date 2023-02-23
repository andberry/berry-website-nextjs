export interface IBlogPostDate extends React.ComponentPropsWithoutRef<'time'> {
    displayDate: string;
}

export const BlogPostDate = ({
    dateTime,
    displayDate,
    className,
}: IBlogPostDate) => {
    return (
        <time
            dateTime={dateTime}
            className={`inline-block text-sm ${className}`}>
            {displayDate}
        </time>
    );
};
