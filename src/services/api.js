import axios from "axios"

const Api = async (amount, difficulty, callback) => {
  if (!amount || !difficulty) {
    return
  }

  const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}`
  let questions = null

  await axios({
    method: 'get',
    url: url,
  })
  .then(response => {
    questions = response.data

    if (callback) {
      callback()
    }
  })

  return questions.results
}

export default Api