const fs = require("fs")
const NetlifyAPI = require('netlify')
const client = new NetlifyAPI('')

const openBrowser = require('./open-browser');
const authenticate = require('./auth')

module.exports = {
  name: 'netlify-plugin-env-variables',
  onPreBuild: async({
    constants,
    inputs
  }) => {
    const clientId = inputs.clientId || process.env.CLIENT_ID
    const auth = await authenticate(client, clientId)

    const {
      authLink,
      ticket
    } = auth

    await openBrowser(authLink)

    const accessToken = await client.getAccessToken(ticket)

    // is there a way to save this so user doesn't have to auth for every request? //

    const site = await client.getSite({site_id: constants.SITE_ID})
    
    // write to .env //
    if (inputs.writeToFile) {
      let envVars = ""
      Object.keys(site.build_settings.env).forEach(envKey => {
        envVars += `\n${envKey}=${site.build_settings.env[envKey]}`
      })
      fs.appendFile(".env", envVars, (err) => {
        if (err) throw err;
        console.log("IS WRITTEN")
      })
    } else {
      console.log("+------------+------------+\n");
      console.log("| Key        | Value      |\n");
      console.log("+------------+------------+\n");
      for (var i = 0; i < Object.keys(site.build_settings.env).length; i++) {
        var envVarKey = Object.keys(site.build_settings.env)[i]
        console.log(`| ${envVarKey} | ${site.build_settings.env[envVarKey]} |\n`)
      }
      console.log("+------------+------------+\n");
    }
  }
}