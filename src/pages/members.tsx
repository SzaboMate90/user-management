import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Header from '../components/Header/Header';
import Members from '../components/Members/Members';

const MembersPage = () => (
  <StaticQuery
    query={graphql`
      query SiteCandidateNameQuery {
        site {
          siteMetadata {
            developerName
          } 
        }
      } 
    `}
    render={({site : { siteMetadata : { developerName }}} : any) => (
      <>
        <Header developerName={developerName} />
        <Members />
      </>
    )}
  />
);

export default MembersPage;
