import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import video from '../vid/Hello-World.webm'
export default class IndexPage extends React.Component {
  
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section class="hero is-fullheight video">
            <div class="hero-video">
                <video src={video} poster="img/bgimg.jpg" id="bgvid" playsinline autoPlay muted loop>
                </video>
            </div>
            <div style={{'flex-direction': 'column'}} class="hero-body">
                <div className="hero-title has-text-white"> 
                  BMCC PROGRAMMING CLUB
                </div>
                <div className="hero-subtitle has-text-centered has-text-white">
                Our mission at the BMCC Programming Club is to promote learning in Computer Science by creating solutions to real-world problems.
                </div>
            </div>
        </section>
        <section className="section">
          <div className="container">
            <div style={{ 'text-align': 'center' }} className="content">
              <h1 className="has-text-weight-bold is-size-2">Upcoming Events!</h1>
            </div>
            {posts
              .map(({ node: post }) => (
                <div
                  className="content has-text-centered"
                  style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
                  key={post.id}
                >
                  <p style={{'margin-bottom':'0px'}}>
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

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
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
