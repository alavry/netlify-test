import React from 'react'
import PropTypes from 'prop-types'
import { EventTemplate } from '../../templates/event'

const EventPreview = ({ entry, widgetFor }) => (
  <EventTemplate
    content={widgetFor('body')}
    title={entry.getIn(['data', 'title'])}
  />
)

EventPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default EventPreview
