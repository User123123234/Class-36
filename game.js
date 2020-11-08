class Game{
constructor(){


}


getState(){
var stateref=database.ref('gameState').on("value",function(data){
gameState=data.val()
})
}

updateState(){
database.ref('gameState').update({
gameState:state
})
}

start(){
if (gameState===0){
player=new Player()
player.getCount()
form=new Form()
form.display()

}




}

}