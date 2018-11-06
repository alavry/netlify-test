import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Helmet from 'react-helmet'

export default class EventsPage extends React.Component {
  render() {
    const { edges: posts } = this.props.data.allMarkdownRemark
    return (
      <Layout>
        <Helmet title="Events"/>
        <section className="section">
        <div className="has-text-centered content">
              <h1 className="has-text-weight-bold is-size-2">Upcoming Events!</h1>
        </div>
          <div className="container events-container">
            {posts
                 .map(({ node: post }) => (
                <div
                  className="content has-text-centered events-item"
                  key={post.id}
                >
                  <p style={{marginBottom:'0px'}}>
                    <Link className="has-text-primary" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                  </p>
                  <p>
                    <small>{post.frontmatter.date}</small>
                  </p>
                  <p>
                    {post.excerpt}
                    <br />
                  </p>
                  <p>
                    <Link className="button is-small" to={post.fields.slug}>
                      Read More
                    </Link>
                  </p>
                </div>
              ))}
          </div>
        </section>
      </Layout>
    )
  }
}

EventsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query EventsQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "event" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 800)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY - h:mm a")
          }
        }
      }
    }
  }
`