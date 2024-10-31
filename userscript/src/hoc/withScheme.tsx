import { isDarkMode } from '@/lib/utils';
import { type ComponentType, useState, useEffect } from 'react';


type ColorScheme = 'dark' | 'light';

function withColorScheme<T extends Record<string, unknown>>(Component: ComponentType<T>) {
    return (props: T) => {
        const [colorScheme, setColorScheme] = useState<ColorScheme>(isDarkMode() ? 'dark' : 'light');
        useEffect(() => {
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    mutation.addedNodes.forEach(_ => {
                        setColorScheme(isDarkMode() ? 'dark' : 'light');
                    });
                });
            });
            observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: ['color-scheme']
            });
        }, []);
        return <Component {...props} colorScheme={colorScheme} />;
    }
}

export default withColorScheme;