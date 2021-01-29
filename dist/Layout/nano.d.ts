declare const nano: import('nano-css').NanoRenderer
declare const put: (
    selector: string,
    css: import('nano-css').CssLikeObject,
    atrule?: string
  ) => void,
  rule: (css: import('nano-css').CssLikeObject, block?: string) => string
export { nano, put, rule }
