let getJoke = document.getElementById('get');

async function jokeFetch(){
    let gettingJoke = await fetch ('https://icanhazdadjoke.com/',{
        headers: {
            accept: "application/json"
        }
    })
    let joke = await gettingJoke.json();
    let data = joke.joke
    getJoke.innerHTML = data
    getJoke.style.backgroundColor = "green"
    console.log(data);
}













