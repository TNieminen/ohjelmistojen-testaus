const statsObject = require('./stats.json')
const fs = require('fs-extra')
// console.table('Amount of chunks: ', statsObject.chunks)
const [chunk] = statsObject.chunks
// remove internal modules
const noInternalModules = chunk.modules.filter(mod => !mod.id.match(/internal/i))
// remove internal as deps to src modules
// should remove things like import createRound from './.internal/createRound.js'
// noInternalModules.map((mod)=>{
//   mod.source
// })
const noInternalAsSource = noInternalModules.filter(mod => !mod.source.match(/internal/i))
const noInternalAsIssuer = noInternalAsSource.filter(mod => mod.issuer === null || !mod.issuer.match(/internal/i))
// TODO remove internal reasons 

// noInternalAsSource.forEach((mod)=>{
//   console.log(mod.source.match(/internal/i))
// })
chunk.modules = noInternalAsIssuer
// 
// because of how javascript handles objects the original object is now updated
fs.outputJSON('./filtered-stats.json',statsObject)