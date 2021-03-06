import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import ListContainer from "../components/listContainer";

const PortfolioPage = ({ data }) => {
  return (
    <Layout pageTitle={"portfolio"}>
      <section>
        <h2>Portfolio</h2>
        <ListContainer data={data} filterParam={"portfolio"} />
      </section>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "D MMMM YYYY")
          title
          variant
          type
          tags
          hero_image_alt
          hero_image_credit_text
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        slug
      }
    }
  }
`;

export default PortfolioPage;
