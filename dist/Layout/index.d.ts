import React from 'react';
import PropTypes from 'prop-types';
export declare const propTypes: {
    m: PropTypes.Requireable<string | number>;
    mb: PropTypes.Requireable<string | number>;
    mt: PropTypes.Requireable<string | number>;
    mr: PropTypes.Requireable<string | number>;
    ml: PropTypes.Requireable<string | number>;
    mx: PropTypes.Requireable<string | number>;
    my: PropTypes.Requireable<string | number>;
    p: PropTypes.Requireable<string | number>;
    pb: PropTypes.Requireable<string | number>;
    pt: PropTypes.Requireable<string | number>;
    pr: PropTypes.Requireable<string | number>;
    pl: PropTypes.Requireable<string | number>;
    px: PropTypes.Requireable<string | number>;
    py: PropTypes.Requireable<string | number>;
    h: PropTypes.Requireable<string | number>;
    w: PropTypes.Requireable<string | number>;
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
 * Function used to generate a className for the component as well
 * as strip out any non-style props
 * @param props
 * @param defaultProps
 * @returns {object} returns a className and any other non-style props
 */
export declare const getPropsWithLayout: <P extends InjectedLayoutProps>(props: P, defaultProps?: P) => Exclude<P, InjectedLayoutProps>;
declare const Layout: <P extends InjectedLayoutProps>(InputComponent: React.ComponentType<P>, defaultProps?: P) => React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<any>>;
export default Layout;
