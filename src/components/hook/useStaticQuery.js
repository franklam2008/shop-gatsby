import { useStaticQuery, graphql } from "gatsby"
export const useSiteMetadata = () => {
  const {site} = useStaticQuery(
    graphql`
     query SiteMetaDataQuery {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }

    `
  )
  return site.siteMetadata
}
