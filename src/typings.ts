declare module 'css-vendor' {
  export function supportedProperty(prop: string): string
  export function supportedValue(prop: string, value: string | number): string
}
