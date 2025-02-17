// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = 'https://quadpay-demo.cdn.prismic.io/api/v2'

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = ''

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  if (doc.type === 'page') return `/${doc.uid}`
  return '/'
}
