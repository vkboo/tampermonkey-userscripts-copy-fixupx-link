export const isDarkMode = () => {
    var style = getComputedStyle(document.documentElement);
    return style.getPropertyValue('color-scheme') === 'dark';
}