var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Header from '../components/Header/Header';
import Members from '../components/Members/Members';
var MembersPage = function () { return (<StaticQuery query={graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      query SiteCandidateNameQuery {\n        site {\n          siteMetadata {\n            developerName\n          } \n        }\n      } \n    "], ["\n      query SiteCandidateNameQuery {\n        site {\n          siteMetadata {\n            developerName\n          } \n        }\n      } \n    "])))} render={function (_a) {
    var developerName = _a.site.siteMetadata.developerName;
    return (<>
        <Header developerName={developerName}/>
        <Members />
      </>);
}}/>); };
export default MembersPage;
var templateObject_1;
//# sourceMappingURL=members.jsx.map