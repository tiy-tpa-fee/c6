(() => {
  const _ = require('lodash')
  const moment = require('moment')

  const updateTimes = () => {
    _.each(document.querySelectorAll('time'), (timeNode) => {
      const relativeTime = moment(timeNode.attributes.datetime.value).fromNow()
      timeNode.textContent = relativeTime + ' HOOT HOOT!'
    })
  }

  const pickles = () => {
    updateTimes()
    setInterval(updateTimes, 30 * 1000)
  }

  document.addEventListener('DOMContentLoaded', pickles)
})()
