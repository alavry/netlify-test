import React from 'react'
import PropTypes from 'prop-types'
import { ContactUsPageTemplate } from '../../templates/contact-us-page'

const ContactUsPage = ({ entry, widgetFor }) => (
  <ContactUsPageTemplate

    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

ContactUsPage.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ContactUsPage
