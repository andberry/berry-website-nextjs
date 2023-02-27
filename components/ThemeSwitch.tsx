import { MdLightbulbOutline as LightIcon } from 'react-icons/md';
import { MdDarkMode as DarkIcon } from 'react-icons/md';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const ThemeSwitch = () => {
    const { theme, setTheme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div className="flex gap-2 text-2xl">
            {theme === 'dark' && (
                <button
                    onClick={() => {
                        setTheme('light');
                    }}
                >
                    <LightIcon />
                </button>
            )}
            {theme === 'light' && (
                <button
                    onClick={() => {
                        setTheme('dark');
                    }}
                >
                    <DarkIcon />
                </button>
            )}
        </div>
    );
};
