const joke = document.querySelector(".joke");
const jokeBtn = document.querySelector(".getJoke");
jokeBtn.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
  const config = {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com/", config);

  console.log(data);
}
