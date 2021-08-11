const pkg = require('../package.json')
const semver = require('semver')

const parsedVersion = semver.parse(pkg.version + '-staging.4')
const urlVersion = parsedVersion.prerelease.length ? parsedVersion.prerelease[0] : `${parsedVersion.major}.${parsedVersion.minor}`

console.log(`Import this application in data-fair using this url:

https://cdn.jsdelivr.net/npm/${pkg.name}@${urlVersion}/dist

You can invalidate the cdn cache by opening this url:

https://purge.jsdelivr.net/npm/${pkg.name}@${urlVersion}/dist/index.html`)
