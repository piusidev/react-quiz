import axios from "axios";

const Questions = (amount) => {
  const url = `https://opentdb.com/api.php?amount=${amount}`;
  let questions = null;

  axios({
    method: 'get',
    url: url,
  })
  .then(response => {
    questions = response.data;
  })

  return questions;
}

export default Questions