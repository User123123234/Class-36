class Form{
constructor(){

}

display(){

var title = createElement('h2')
title.html('Car Racing Game')
title.position(130,0)

var input= createInput('NAME')
input.position(130,160)

var button= createButton('Play')
button.position(250,200)

var greeting = createElement('h3')

button.mousePressed(function(){
input.hide()
button.hide()
var name=input.value()
playerCount=playerCount+1;
player.updateCount(playerCount)
player.updateName(name)
greeting.html("Greetings, " + name)
greeting.position(130,160)
})


}}