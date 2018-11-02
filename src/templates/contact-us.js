import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import logo from '../img/terminal.svg'
import Helmet from 'react-helmet'

export const ContactUsPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="contact-border section has-text-right ">
            <div style={{'column-count': '2'}}>
            <div>
              <img src={logo}></img>
            </div>
            <div style={{}} >
              <h2 style={{'font-size': '4vw'}} className="title has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content contact-info" content={content} />
            </div>
            </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  )
}

ContactUsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ContactUsPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <Helmet title="Contact Us"/>
      <ContactUsPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

ContactUsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContactUsPage

export const ContactUsPageQuery = graphql`
  query ContactUsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
