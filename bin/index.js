const getList = require('../src')

const [filter, ...args] = process.argv.slice(2)

getList()
  .then(results => {
    for (let k = 0, s = results.length; k < s; k++) {
      const result = results[k]
      const {
        type,
        data
      } = result

      for (let i = 0, l = data.downloadURLs.length; i < l; i++) {
        const option = data.downloadURLs[i]
        const shouldPrint =
          (option.url) &&
          (
            (!filter) ||
            (filter && option.lang.toUpperCase().includes(filter.toUpperCase()))
          )
        if (shouldPrint) {
          const lines = []

          lines.push(type.padStart(24, ' '))
          lines.push(option.lang.padStart(5, ' '))
          lines.push(option.bits + 'bits')

          console.log(lines.join(' | '))
          console.log(' > ' + option.url)
        }
      }
    }
  })
