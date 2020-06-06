require('dotenv').config()
const { getRepoInfo } = require('./repoInfo')

;(async () => {
  try {
    const repoInfo = await getRepoInfo()
    console.log(repoInfo)
  } catch (error) {
    console.error(error.message)
  }
})()
