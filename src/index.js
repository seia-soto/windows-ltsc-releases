const fetch = require('cross-fetch')
const cheerio = require('cheerio')

const getList = async (opts = {}) => {
  opts.evalcenterURL = opts.evalcenterURL || 'https://www.microsoft.com/en-us/evalcenter/evaluate-windows-10-enterprise'

  const response = await fetch(opts.evalcenterURL)
  const body = await response.text()

  const $ = cheerio.load(body)
  const results = []

  $('input.rbtFileType[id*="rdbtnDownloadSection"]')
    .each((index, element) => {
      results.push({
        type: $(`label[for*="${$(element).attr('id')}"]`).text(),
        data: JSON.parse($(element).attr('routingform'))
      })
    })

  return results
}

module.exports = getList
