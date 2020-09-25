const recursive = require('recursive-readdir')
// import works because we define a module env in package.json

const readDirPromise = path => new Promise((resolve,reject) => {
  recursive(path, (err, files) => {
    if (err) {
      reject(err)
    }
    // `files` is an array of file paths
    const filteredFiles = files
      .filter(file => !file.match(/\.internal/i))
      .filter(file => file.match(/src/i))
      .filter(file => file.match(/.js/i))      
    resolve(filteredFiles.map(file => file.split('src/')[1]))
  })  
})
readDirPromise('./assignment').then((files) => {
  files.forEach((file) => {
    console.log(`'${file}'`)
  })
})