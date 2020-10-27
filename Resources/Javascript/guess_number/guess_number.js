function guessNum() {
  let result
  const randomNum = Math.floor(Math.random() * 10)
  console.log(randomNum)
  const insertNum = Number(document.querySelector('.get-number').value)
  if (insertNum === randomNum) {
    result = "Congrats, that's correct number!"
  } else {
    result = 'Sorry, try again!'
  }
  return (document.querySelector('.result').innerHTML = result)
}
