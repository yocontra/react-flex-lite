declare const nano: import("nano-css").NanoRenderer;
declare const put: (selector: string, css: import("nano-css").CssLikeObject, atrule?: string | undefined) => void, rule: ((css: import("nano-css").CssLikeObject, block?: string | undefined) => string) | undefined;
export { nano, put, rule };
