import { Container } from './Container';
import classNames from 'classnames';
import { HeroTitle } from './typography/HeroTitle';

interface IHeaderTitle extends React.ComponentPropsWithoutRef<'header'> {}

export const HeaderTitle = ({ children }: IHeaderTitle) => {
    return (
        <header
            className={classNames(
                'pt-32 pb-16 xl:pt-48 xl:pb-24 dark:text-white text-black0'
            )}
        >
            <Container>
                <HeroTitle>{children}</HeroTitle>
            </Container>
        </header>
    );
};
