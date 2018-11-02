import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import EventPreview from './preview-templates/EventPreview'
import ContactUsPagePreview from './preview-templates/ContactUsPagePreview'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('event', EventPreview)
CMS.registerPreviewTemplate('contact-us', ContactUsPagePreview)
