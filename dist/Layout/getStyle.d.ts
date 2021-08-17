import type { Configuration } from '../types';
declare type Value = number | string | undefined;
declare type Props = Record<string, Value>;
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
    onCacheAdd: import("moize").OnCacheOperation;
    onCacheChange: import("moize").OnCacheOperation;
    onCacheHit: import("moize").OnCacheOperation;
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
