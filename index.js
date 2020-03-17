const NetlifyAPI = require('netlify')
const client = new NetlifyAPI('')

const openBrowser = require('./open-browser');
const authenticate = require('./auth')

module.exports = {
  name: 'netlify-plugin-env-variables',
  onPreBuild: async({
    pluginConfig,
    constants,
    utils
  }) => {

    const auth = await authenticate(client)

    const {
      authLink,
      ticket
    } = auth

    await openBrowser(authLink)

    const accessToken = await client.getAccessToken(ticket)
    const site = await client.getSite({site_id: constants.SITE_ID})
    
    console.log(site.build_settings.env)
  }
}