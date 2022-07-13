const joke = document.querySelector(".joke");
const jokeBtn = document.querySelector(".getJoke");
jokeBtn.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
    const config = {
        {Accept:'application/json'}
    }
}
