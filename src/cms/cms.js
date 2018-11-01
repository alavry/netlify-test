import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ContactUsPagePreview from './preview-templates/BlogPostPreview'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('contact-us', ContactUsPagePreview)
