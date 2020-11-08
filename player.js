class Player{
    constructor(){
    
    
    }
    
    
    getCount(){
    var countref=database.ref('playerCount').on("value",function(data){
    playerCount=data.val()
    })
    }
    
    updateCount(count){
    database.ref('/').update({
    playerCount:count
    })
    
    }
    
    updateName(name){
var playerref = "Player " + playerCount
database.ref(playerref).set({
name:name
})

    }

    }   