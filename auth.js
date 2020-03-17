module.exports = async function authenticate(client) {
  const CLIENT_ID = CLIENT_ID_GOES_HERE
  const webUI = process.env.NETLIFY_WEB_UI || 'https://app.netlify.com'
  
  const ticket = await client.createTicket({
    clientId: CLIENT_ID
  })
  
  // Open browser for authentication
  const authLink = `${webUI}/authorize?response_type=ticket&ticket=${ticket.id}`
  return Promise.resolve({
    authLink,
    ticket
  })
}