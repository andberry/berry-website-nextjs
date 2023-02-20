import classNames from 'classnames';

export const DropCap = ({
    letter,
    size = 'large',
}: {
    letter: string;
    size?: 'small' | 'default' | 'large';
}) => {
    const fontSizeClassMap = {
        small: 'text-[3rem]',
        default: 'text-[4rem]',
        large: 'text-[12rem]',
    };
    return (
        <div
            className={classNames(
                'font-galada leading-none',
                fontSizeClassMap[size]
            )}>
            {letter}
        </div>
    );
};
