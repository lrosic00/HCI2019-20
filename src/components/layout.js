import React from "react"
import Header from "./header"
import Footer from "./Footer"
import Seo from "../components/seo"

const Layout = props => (
  <>
    <Seo title="CR Group"></Seo>
    <Header activePage={props.activePage}></Header>
    {props.children}
    <Footer></Footer>
  </>
)

export default Layout

// import React from "react"
// import Navigation from "./Navigation"
// import { Link } from "gatsby"
// import { useStaticQuery, graphql } from "gatsby"
// //ovo stoji samo za primjer ovaj menuItems iza ovo smo rijesili lijepo pomocu gatsby-config.js
// //sad to stoji u ItemsMenu povri plugina u configu
// /*
// const menuItems = [
//   {
//     text: "About Us",
//     link: "/AboutUs",
//   },
//   {
//     text: "Blog",
//     link: "/Blog",
//   },
//   {
//     text: "Contact",
//     link: "/Contact",
//   },
//   {
//     text: "My Gallery",
//     link: "/MyGallery",
//   },
// ]
// */
// const Layout = props => {
//   //query od graphiql-a
//   const data = useStaticQuery(graphql`
//     {
//       site {
//         siteMetadata {
//           menuItems {
//             link
//             text
//           }
//         }
//       }
//     }
//   `)
//   //console.log("Data from layout:", data)
//   //da mozemo Navigation {menuItems} umisto {data.site.siteMetadata}
//   const { menuItems } = data.site.siteMetadata
//   return (
//     <div>
//       {props.children}
//       <Navigation menuItems={menuItems} />
//       <Link to="/">Go Home</Link>
//     </div>
//   )
// }

// export default Layout
