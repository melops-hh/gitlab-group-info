const { getRepoInfo } = require('./repoInfo')
const secret = process.env.SECRET

exports.gitlabRepos = async (req, res) => {
  try {
    if (secret !== req.query.secret) {
      return res.status(401).send('Unauthorized')
    }
    const repoInfo = await getRepoInfo()
    res.json(repoInfo)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Internal Server Error')
  }
}
