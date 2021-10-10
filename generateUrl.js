function generateUrl() {
  const numbers = '1234567890'
  const lowerCaseLetters = 'abcdefghijklmnopqrtuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const letters = numbers + lowerCaseLetters + upperCaseLetters
  let newLetters = ''
  for (let i = 1; i <= 5; i++) {
    newLetters += letters[Math.floor(Math.random() * letters.length)]
  }
  return `http://localhost:3000/${newLetters}`
}

module.exports = generateUrl