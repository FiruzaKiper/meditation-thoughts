const button = document.querySelector("#btn");
const par = document.querySelector("#par");

const quotes = [
"“Meditation is less about knowing what to do and more about knowing what not to do.”",
"“No matter how fast life is moving around us, there is always a place of stillness inside.”",
"“We can't control the sea, but we can learn how to surf the waves.”",
"“Meditation means letting go of our baggage, letting go of all the pre-rehearsed stories and inner-dialogue that we have grown so attached to.”",
"“Meditation and life are not separate. Meditation simply helps us to see and understand life more clearly.”",
"“The mind is our most precious resource, through which we experience every single moment of life. Are you looking after yours?”",
"“Meditation nourishes the mind in the same way that food nourishes the body.”",
"“There is no room for anger when the mind is calm.”",
"“A day thinking about what could happen, should happen, or what might have been is a day missed.”",
"“Remember the blue sky. It may at times be obscured by clouds, but it is always there.”",
"“In the midst of movement and chaos, keep stillness inside of you.” ",
"“Meditation is not about having yet another new strategy of self-help plan, but rather providing a framework in which to see yourself more clearly.”"
]
button.addEventListener("click", function() {
let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
par.style.display = "block";
par.textContent = randomQuote;
})

const buttonPause = document.querySelector("#buttonPause");
buttonPause.addEventListener("click", function(){
    document.querySelector("#myAudio").pause();
})
const buttonPlay = document.querySelector("#buttonPlay");
buttonPlay.addEventListener("click", function(){
    document.querySelector("#myAudio").play();
})
