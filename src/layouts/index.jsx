import * as React from 'react';
import LightLayout from './LightLayout/LightLayout.layout';
/**
 * Global layout component.
 *
 * This layout will be shared across all pages.
 * https://www.gatsbyjs.org/packages/gatsby-plugin-layout/
 */
var Layout = function (_a) {
    var children = _a.children;
    return (<LightLayout>
    {children}
  </LightLayout>);
};
export default Layout;
//# sourceMappingURL=index.jsx.map