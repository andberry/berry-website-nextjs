import { Container } from './Container';
import classNames from 'classnames';
import { HeroTitle } from './typography/HeroTitle';

interface IHeaderTitle extends React.ComponentPropsWithoutRef<'header'> {}

export const HeaderTitle = ({ children }: IHeaderTitle) => {
    return (
        <header
            className={classNames(
                'pt-32 pb-16 2xl:pt-48 2xl:pb-24 text-white'
            )}>
            <Container>
                <HeroTitle>{children}</HeroTitle>
            </Container>
        </header>
    );
};
