type CSSModuleClasses = { readonly [key: string]: string }
declare module '*.css' {
    const classes: CSSModuleClasses
    export default classes;
}
declare module '*.module.css' {
    const classes: CSSModuleClasses
    export default classes;
}
declare module '*.less' {
    const classes: CSSModuleClasses
    export default classes
}