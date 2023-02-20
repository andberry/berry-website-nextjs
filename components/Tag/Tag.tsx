import classNames from 'classnames';

interface ITag {
    tag: string;
}

export function Tag({ tag }: ITag) {
    return (
        <div
            className={classNames(
                'flex items-center',
                'text-sm leading-tight text-center text-white',
                'bg-black2 text-white2 px-2 py-1 rounded-sm'
            )}>
            {tag}
        </div>
    );
}
