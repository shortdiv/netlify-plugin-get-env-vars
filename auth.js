module.exports = async function authenticate(client, clientId) {
  const webUI = process.env.NETLIFY_WEB_UI || 'https://app.netlify.com'
  
  const ticket = await client.createTicket({
    clientId
  })
  
  // Open browser for authentication
  const authLink = `${webUI}/authorize?response_type=ticket&ticket=${ticket.id}`
  return Promise.resolve({
    authLink,
    ticket
  })
}