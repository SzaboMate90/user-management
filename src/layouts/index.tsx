import * as React from 'react';
import LightLayout from './LightLayout/LightLayout.layout';
import { PropsChildrenType } from '../tools/globalTypes';

/**
 * Global layout component.
 *
 * This layout will be shared across all pages.
 * https://www.gatsbyjs.org/packages/gatsby-plugin-layout/
 */

const Layout = ({ children } : PropsChildrenType) => (
  <LightLayout>
    {children}
  </LightLayout>
);

export default Layout;
