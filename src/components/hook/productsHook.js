import { useStaticQuery, graphql } from "gatsby"
export const useProducts = () => {
  const { edges } = useStaticQuery(
    graphql`
      query siteProducts {
        menu: allContentfulTeaProducts {
          edges {
            node {
              id
              title
              feature
              productPrice
              productImg {
                fixed(width: 200, height: 200) {
                  ...GatsbyContentfulFixed
                }
              }
              productDescription {
                content {
                  content {
                    value
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  return edges
}
