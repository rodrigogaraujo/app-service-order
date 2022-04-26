function loadStories () {
  require('../src/screens/auth/Login/components/LineEmoji/LineEmoji.stories')
  require('../src/components/Input/Input.stories')
  require('../src/components/Button/Button.stories')
}

const stories = [
  '../src/screens/auth/Login/components/LineEmoji/LineEmoji.stories',
  '../src/components/Input/Input.stories',
  '../src/components/Button/Button.stories',
]

module.exports = {
  loadStories, 
  stories,
}
