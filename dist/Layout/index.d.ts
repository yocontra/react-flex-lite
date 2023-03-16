import React from 'react';
import PropTypes from 'prop-types';
import type { Configuration } from '../types';
export declare const propTypes: {
    m: PropTypes.Requireable<NonNullable<string | number>>;
    mb: PropTypes.Requireable<NonNullable<string | number>>;
    mt: PropTypes.Requireable<NonNullable<string | number>>;
    mr: PropTypes.Requireable<NonNullable<string | number>>;
    ml: PropTypes.Requireable<NonNullable<string | number>>;
    mx: PropTypes.Requireable<NonNullable<string | number>>;
    my: PropTypes.Requireable<NonNullable<string | number>>;
    p: PropTypes.Requireable<NonNullable<string | number>>;
    pb: PropTypes.Requireable<NonNullable<string | number>>;
    pt: PropTypes.Requireable<NonNullable<string | number>>;
    pr: PropTypes.Requireable<NonNullable<string | number>>;
    pl: PropTypes.Requireable<NonNullable<string | number>>;
    px: PropTypes.Requireable<NonNullable<string | number>>;
    py: PropTypes.Requireable<NonNullable<string | number>>;
    h: PropTypes.Requireable<NonNullable<string | number>>;
    w: PropTypes.Requireable<NonNullable<string | number>>;
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
    shrink: PropTypes.Requireable<NonNullable<number | boolean>>;
    grow: PropTypes.Requireable<NonNullable<number | boolean>>;
    basis: PropTypes.Requireable<number>;
    auto: PropTypes.Requireable<boolean>;
    hcenter: PropTypes.Requireable<boolean>;
    vcenter: PropTypes.Requireable<boolean>;
    center: PropTypes.Requireable<boolean>;
};
export type StyleProps = PropTypes.InferProps<typeof propTypes>;
export interface InjectedLayoutProps extends StyleProps {
    className?: string;
    [key: string]: any;
}
/**
 * Function used to generate a className for the component as well
 * as strip out any non-style props
 * @param props
 * @param defaultProps
 * @returns {object} returns a className and any other non-style props
 */
export declare const getPropsWithLayout: <P extends InjectedLayoutProps>(props: P, defaultProps?: P, config?: Configuration) => Exclude<P, InjectedLayoutProps>;
export declare const LayoutContext: React.Context<Configuration>;
declare const Layout: <P extends InjectedLayoutProps>(InputComponent: React.ComponentType<P>, defaultProps?: P) => React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<React.ComponentType<P>>>;
export default Layout;
