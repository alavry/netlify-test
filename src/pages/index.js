import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import video from '../vid/Hello-World.webm'
import poster from '../img/Hello-World.jpg'
import Helmet from 'react-helmet'
import Modal from 'react-modal'

export default class IndexPage extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
  
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return (
      <Layout>
      <Helmet title="Home"/>
        <section className="hero is-fullheight video">
            <div className="hero-video">
              <video src={video} style={{ objectFit: 'cover', width: '100%', height: '100%'}} poster={poster} playsInline autoPlay muted loop></video>
            </div>
            <div style={{flexDirection: 'column'}} className="hero-body">
                <div className="hero-title has-text-white"> 
                  BMCC PROGRAMMING CLUB
                </div>
                <div className="hero-subtitle has-text-centered has-text-white">
                  Our mission at the BMCC Programming Club is to promote learning in Computer Science by creating solutions to real-world problems.
                </div>
                <div>
                <button onClick={this.openModal}>Open Modal</button>
                <Modal
                  isOpen={this.state.modalIsOpen}
                  onAfterOpen={this.afterOpenModal}
                  onRequestClose={this.closeModal}
                  style={{
                    overlay: {
                      backgroundColor: 'rgba(0, 0, 0, 0.75)',
                      zIndex: 2
                    },
                    content: {
                      border: '0',
                      borderRadius: '4px',
                      bottom: 'auto',
                      height: '500px',  // set height
                      left: '30vw',
                      padding: '2rem',
                      position: 'fixed',
                      right: 'auto',
                      top: '25%', // start from center
                      width: '40%',
                      maxWidth: '40rem'
                    }
                  }}
                  contentLabel="Example Modal"
                >
                  <form>
                    <input />
                    <button>Submit</button>
                  </form>
                  <button onClick={this.closeModal}>close</button>

                </Modal>

                </div>
            </div>
        </section>
        <section className="section">
          <div className="has-text-centered content">
              <h1 className="has-text-weight-bold is-size-2">Upcoming Events!</h1>
          </div>
          <div className="container">
            {posts
              .filter((i, index) => (index < 3))
              .map(({ node: post }) => (
                <div
                  className="content has-text-centered"
                  style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
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
      filter: { frontmatter: { templateKey: { eq: "event" } }}
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