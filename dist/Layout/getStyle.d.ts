import type { Configuration } from '../types';
type Value = number | string | undefined;
type Props = Record<string, Value>;
declare const _default: import("moize").Moized<(props: Props, config: Configuration) => string, Partial<{
    isDeepEqual: boolean;
    isPromise: boolean;
    isReact: boolean;
    isSerialized: boolean;
    isShallowEqual: boolean;
    matchesArg: import("moize").IsEqual;
    matchesKey: import("moize").IsMatchingKey;
    maxAge: number;
    maxArgs: number;
    maxSize: number;
    onCacheAdd: import("moize").OnCacheOperation<(props: Props, config: Configuration) => string>;
    onCacheChange: import("moize").OnCacheOperation<(props: Props, config: Configuration) => string>;
    onCacheHit: import("moize").OnCacheOperation<(props: Props, config: Configuration) => string>;
    onExpire: import("moize").OnExpire;
    profileName: string;
    serializer: import("moize").Serialize;
    transformArgs: import("moize").TransformKey;
    updateCacheForKey: import("moize").UpdateCacheForKey;
    updateExpire: boolean;
}> & {
    isDeepEqual: true;
}>;
export default _default;
