import classNames from 'classnames';

interface ITag {
    tag: string;
    variant?: 'default' | 'dark';
}

export function Tag({ tag, variant = 'default' }: ITag) {
    return (
        <div
            className={classNames(
                'flex items-center',
                'text-sm leading-tight text-center dark:text-white text-black',
                'px-2 py-1 rounded-sm',
                {
                    'dark:bg-black2 dark:text-white2 bg-white border border-black dark:border-none text-black px-2 py-1':
                        variant === 'default',
                },
                {
                    'dark:bg-black dark:text-white bg-white2 text-black px-2 py-1':
                        variant === 'dark',
                }
            )}
        >
            {tag}
        </div>
    );
}
