import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Officer from '../components/Officer'
// import { HTMLContent } from '../components/Content'
import president from '../img/president.jpg'
import Helmet from 'react-helmet'

export const AboutPageTemplate = ({ title, 
  // content, 
  // contentComponent,
 }) => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section has-text-centered">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <div id="officers">
                <div id="officers-list">
                    <Officer name="Jairo Molina" img={president} role="President" email= "molinaandres9991@gmail.com"></Officer>
                    <Officer name="Fredi" role="Vice-President" email="fredirbase@gmail.com"></Officer>
                    <Officer name="Adrian Koss" role="Secretary" email="adrianpkoss7@gmail.com"></Officer>
                    <Officer name="Sho Nakajima" role="Treasurer" email="tojiro1028@live.jp"></Officer>
                  </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  // content: PropTypes.string,
  // contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <Helmet title="About"/>
      <AboutPageTemplate
        // contentComponent={HTMLContent}
        title={post.frontmatter.title}
        // content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
