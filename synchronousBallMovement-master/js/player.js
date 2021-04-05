class Player{
constructor(){}

//Read playercount from database
getCount(){
var pc = database.ref('playerCount')
pc.on("value",function(data){
    playerCount = data.val()
})
}

//Update playercount to database
updateCount(count){
database.ref('/').update({
    playerCount : count
})
}

//Update name to database
update(name){
var playerIndex = "player" + playerCount;
database.ref(playerIndex).set({
    name : name
})
}


}