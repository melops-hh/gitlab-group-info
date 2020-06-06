const { get } = require('./request')
const projectId = process.env.GITLAB_PROJECT_ID

async function getProjects() {
  const url = `groups/${projectId}/projects?order_by=name&sort=asc&page=1&simple=true&per_page=50`
  return get(url)
}

async function getBranchInfo(projectId, branch) {
  try {
    const url = `projects/${projectId}/repository/branches/${branch}`
    const info = await get(url)
    return info
  } catch (error) {
    console.log(error.message)
    return {}
  }
}

async function getRepoInfo() {
  const projects = await getProjects()
  const repoInfo = []
  const promises = projects.map(async (project) => {
    const masterBranch = await getBranchInfo(project.id, 'master')
    const devBranch = await getBranchInfo(project.id, 'dev')
    const info = {
      id: project.id,
      name: project.name,
      url: project.web_url,
      sshUrl: project.ssh_url_to_repo,
      masterInfo: masterBranch,
      devInfo: devBranch,
    }
    repoInfo.push(info)
  })
  await Promise.all(promises)
  return repoInfo
}

module.exports = { getRepoInfo }
