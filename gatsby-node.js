// const path = require(`path`)
// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   return graphql(`
//     {
//       allWordpressPost(sort: { fields: [date] }) {
//         edges {
//           node {
//             title
//             excerpt
//             content
//             slug
//           }
//         }
//       }
//     }
//   `).then(result => {
//       console.log(JSON.stringify(result, null, 4))
//     result.data.allWordpressPost.edges.forEach(({ node }) => {
//         createPage({
//             path: node.slug,
//             component: path.resolve(`./src/templates/Template.js`),
//             context: {
//               slug: node.slug,
//             },
//           })
//         })
//   })}