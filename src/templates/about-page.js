import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import president from '../img/president.jpg'
import avatar from '../img/avatar.png'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
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
                    <div class="officer">
                      <img id="avt" alt="Jairo" src={president}></img>
                        <h1 class="officer-name">Jairo Molina</h1>
                        <p class="officer-role has-text-weight-semibold">President</p>
                        <a href="mailto:molinaandres9991@gmail.com" class="button">Contact</a>
                    </div>

                    <div class="officer">
                      <img id="avt" alt="Fredi" src={avatar}></img>
                        <h1 class="officer-name">Fredi </h1>
                        <p class="officer-role has-text-weight-semibold">Vice-President</p>
                        <a href="mailto:fredirbase@gmail.com" class="button">Contact</a>
                    </div>

                    <div class="officer">
                      <img id="avt" alt="Adrian"  src={avatar}></img>
                        <h1 class="officer-name">Adrian Koss</h1>
                        <p class="officer-role has-text-weight-semibold">Secretary</p>
                        <a href="mailto:adrianpkoss7@gmail.com" class="button">Contact</a>
                    </div>

                    <div class="officer">
                      <img id="avt" alt="Sho" src={avatar}></img>
                        <h1 class="officer-name">Sho Nakajima</h1>
                        <p class="officer-role has-text-weight-semibold	">Treasurer</p>
                        <a href="mailto:tojiro1028@live.jp" class="button">Contact</a>
                    </div>
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
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
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
