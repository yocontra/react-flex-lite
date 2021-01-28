import React from 'react';
import PropTypes from 'prop-types';
export declare const propTypes: {
    m: PropTypes.Requireable<import("nano-css").TLength>;
    mb: PropTypes.Requireable<import("nano-css").TLength>;
    mt: PropTypes.Requireable<import("nano-css").TLength>;
    mr: PropTypes.Requireable<import("nano-css").TLength>;
    ml: PropTypes.Requireable<import("nano-css").TLength>;
    mx: PropTypes.Requireable<import("nano-css").TLength>;
    my: PropTypes.Requireable<import("nano-css").TLength>;
    p: PropTypes.Requireable<import("nano-css").TLength>;
    pb: PropTypes.Requireable<import("nano-css").TLength>;
    pt: PropTypes.Requireable<import("nano-css").TLength>;
    pr: PropTypes.Requireable<import("nano-css").TLength>;
    pl: PropTypes.Requireable<import("nano-css").TLength>;
    px: PropTypes.Requireable<import("nano-css").TLength>;
    py: PropTypes.Requireable<import("nano-css").TLength>;
    h: PropTypes.Requireable<import("nano-css").TLength>;
    w: PropTypes.Requireable<import("nano-css").TLength>;
    flex: PropTypes.Requireable<boolean>;
    inline: PropTypes.Requireable<boolean>;
    wrap: PropTypes.Requireable<boolean>;
    reverse: PropTypes.Requireable<boolean>;
    column: PropTypes.Requireable<boolean>;
    align: PropTypes.Requireable<string>;
    alignContent: PropTypes.Requireable<string>;
    alignSelf: PropTypes.Requireable<string>;
    justify: PropTypes.Requireable<string>;
    order: PropTypes.Requireable<number>;
    shrink: PropTypes.Requireable<number | boolean>;
    grow: PropTypes.Requireable<number | boolean>;
    basis: PropTypes.Requireable<number>;
    auto: PropTypes.Requireable<boolean>;
    center: PropTypes.Requireable<boolean>;
};
export declare type StyleProps = PropTypes.InferProps<typeof propTypes>;
export interface InjectedLayoutProps extends StyleProps {
    className?: string;
    [key: string]: any;
}
export declare type Ref = any;
/**
 * TODO Document Me
 * @param props
 * @param defaultProps
 */
export declare const getPropsWithLayout: <P extends InjectedLayoutProps>(props: P, defaultProps?: P | undefined) => Exclude<P, InjectedLayoutProps>;
declare const Layout: <P extends InjectedLayoutProps>(InputComponent: React.ComponentType<P>, defaultProps?: P | undefined) => React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<any>>;
export default Layout;
