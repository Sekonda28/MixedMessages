function randomQuote(){
    let arnieQuote = {
        input1: [
        "Who is your Daddy and what does he do?", 
        "You want to be a farmer?", 
        "What killed the dinosaurs?", 
        "Ha ha ha, you think this is the real Quid? It is!", 
        "Remember when I said I’d kill you last? I lied!"],

        input2: [
        "I need a Turbo Man!", 
        "You should not drink and bake!",
        "To crush your enemies, see them driven before you, and hear the lamentation of their women!", 
        "I did nothing, the pavement was his enemy!", 
        "If it bleeds you can kill it!", 
        "Rubber baby buggy bumpers!", 
        "Chill out dick wad!", 
        "I'm not shitting on you.", 
        "Talk to the hand.", 
        "You, are not you, you are me...no shit!", 
        "I'm the famous comedian Arnold Brownschwieger."],

        input3: [
        "I'll be back", 
        "Your move creep", 
        "Do it! Do it now!", 
        "Consider that a divorce!", 
        "You're luggage!", 
        "Get your ass to Mars!", 
        "It is not a tumor!", 
        "You have just been erased!", 
        "Stick around!"]
    }   

    let randomPhrase = "Arnie's philisophical question: " + arnieQuote.input1[Math.floor(Math.random()*arnieQuote.input1.length)] + "\nArnie's words of wisdom: " + arnieQuote.input2[Math.floor(Math.random()*arnieQuote.input2.length)] + "\nArnie's exit quote: " + arnieQuote.input3[Math.floor(Math.random()*arnieQuote.input3.length)]
    return randomPhrase
}

console.log(randomQuote())

