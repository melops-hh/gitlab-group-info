const superagent = require('superagent')

const baseUrl = 'https://gitlab.com/api/v4/'
const token = process.env.GITLAB_TOKEN

async function get(url) {
  try {
    const fullUrl = `${baseUrl}${url}`
    const { body } = await superagent.get(fullUrl).set('PRIVATE-TOKEN', token)
    return body
  } catch (error) {
    console.error(error.message)
    throw Error('Error in gitGet')
  }
}
async function post(url, data) {
  try {
    const fullUrl = `${baseUrl}${url}`
    const { body } = await superagent
      .post(fullUrl)
      .send(data)
      .set('PRIVATE-TOKEN', token)
      .set('accept', 'json')
    return body
  } catch (error) {
    console.error(error.message)
    throw Error('Error in gitPost')
  }
}

module.exports = { get, post }
