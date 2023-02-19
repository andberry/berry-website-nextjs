import { ReactElement, ReactNode } from 'react';

interface ITechIcon {
    Icon?: React.ElementType;
    text?: string;
}
export function TechIcon({ Icon, text }: ITechIcon) {
    if (!Icon && !text) {
        return null;
    }

    return (
        <div className="flex flex-col items-center justify-center">
            {Icon && (
                <div className="text-4xl">
                    <Icon />
                </div>
            )}
            {text && <div className="text-sm mt-2">{text}</div>}
        </div>
    );
}
