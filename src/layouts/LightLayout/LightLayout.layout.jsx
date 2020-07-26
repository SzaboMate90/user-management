var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GlobalStyle, Layout } from './LightLayout.style';
import { importFonts } from '../../styles/Fonts';
import Helmet from '../../components/Helmet/Helmet';
import Content from '../../components/Content/Content';
var LightLayoutLayout = function (_a) {
    var children = _a.children;
    return (<StaticQuery query={graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      query SiteDataQuery {\n        site {\n          siteMetadata {\n            description\n            lang\n            title\n          }\n        }\n      } \n    "], ["\n      query SiteDataQuery {\n        site {\n          siteMetadata {\n            description\n            lang\n            title\n          }\n        }\n      } \n    "])))} render={function (data) {
        var _a = data.site.siteMetadata, description = _a.description, lang = _a.lang, title = _a.title;
        return (<Layout>
          <GlobalStyle />
          <Helmet title={title} description={description} lang={lang}>
            {importFonts()}
          </Helmet>
          <Content>
            {children}
          </Content>
        </Layout>);
    }}/>);
};
export default LightLayoutLayout;
var templateObject_1;
//# sourceMappingURL=LightLayout.layout.jsx.map