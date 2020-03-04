import { useStaticQuery, graphql } from "gatsby"
export const useSiteImages = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query useSiteImagesQuery {
        allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          edges {
            node {
              childImageSharp {
                fluid {
                  originalName
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  )
  return allFile
}
