import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const Template = ({data}) => (
<Layout>
    {/* <div dangerouslySetInnerHTML={{__html: data.allWordpressPost.edges[0].node.content}}></div> */}
</Layout>);

// export const pageQuery = graphql`
// query WordpressPost ($slug: String!)   {
//   allWordpressPost(filter: {slug: {eq:$slug}}) {
//     edges {
//       node {
//         title
//         content
//       }
//     }
//   }
// }
// `

export default Template;