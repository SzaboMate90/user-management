import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GlobalStyle, Layout } from './LightLayout.style';
import { PropsChildrenType } from '../../tools/globalTypes';
import { importFonts } from '../../styles/Fonts';
import Helmet from '../../components/Helmet/Helmet';
import Content from '../../components/Content/Content';

const LightLayoutLayout = ({ children } : PropsChildrenType) => (
  <StaticQuery
    query={graphql`
      query SiteDataQuery {
        site {
          siteMetadata {
            description
            lang
            title
          }
        }
      } 
    `}
    render={(data : any) => {
      const {
        site : {
          siteMetadata : {
            description,
            lang,
            title
          }
        }
      } = data;

      return (
        <Layout>
          <GlobalStyle />
          <Helmet
            title={title}
            description={description}
            lang={lang}
          >
            {importFonts()}
          </Helmet>
          <Content>
            {children}
          </Content>
        </Layout>
      );
    }}
  />
);

export default LightLayoutLayout;
