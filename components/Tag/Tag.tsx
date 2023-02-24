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
                'text-sm leading-tight text-center text-white',
                'px-2 py-1 rounded-sm',
                {
                    'bg-black2 text-white2 px-2 py-1 rounded-sm':
                        variant === 'default',
                },
                {
                    'bg-black text-white px-2 py-1 rounded-sm':
                        variant === 'dark',
                }
            )}>
            {tag}
        </div>
    );
}
