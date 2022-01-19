declare const nano: import("nano-css").NanoRenderer;
declare const sheet: (cssMap: {
    [s: string]: import("nano-css").CssLikeObject;
}, block?: string) => {
    [s: string]: string;
};
export { nano, sheet };
