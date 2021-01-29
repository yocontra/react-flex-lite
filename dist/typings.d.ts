declare module 'css-vendor' {
    function supportedProperty(prop: string): string;
    function supportedValue(prop: string, value: string | number): string;
}
