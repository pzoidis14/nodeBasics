// PART 1
// const exportsFromFileB = require('./fileB') // note the relative file path
// console.log(exportsFromFileB)



// PART 2
// const exportsFromFileB = require('./fileB')
// exportsFromFileB()



// PART 3
// require('./fileB')
// require('./fileB')
// not a typo - actually require it twice!
// The console.log is only seen once.
// This is because Node only ever executes a file that's being required once.
// The first time a module is required, the file will be executed as normal and the value of module.exports will be calculated.
//That value is cached (that is, stored and put aside) by Node.
// That value is then returned from the call to require.
// Any subsequent time the same module is required, the file will not be executed again - instead, the cached value will be returned right away!



// BONUS
const exportsFromSnippet1 = require('./snippet1')
console.log(exportsFromSnippet1)
// approach is to add each key-value pair to preexisting empty module.exports obj

const exportsFromSnippet2 = require('./snippet2')
console.log(exportsFromSnippet2)
// approach is to reassign module.exports to a new obj with key-value pairs you want
// reassigning module.exports is preferred over snippet1's approach

const exportsFromSnippet3 = require('./snippet3')
console.log(exportsFromSnippet3)
// only return cats because all of snippet3 file is run before exports is pulled out, at which point module.exports = cats
