class Game{
constructor(){}

//Read gamestate from database
getState(){
  var gs = database.ref('gameState')
   gs.on("value",function(data){
  gameState = data.val();
   })
}

//update gamestate to database
update(state){
database.ref('/').update({
    gameState : state
})
}

start(){

if(gameState === 0){
player = new Player()
player.getCount()
form = new Form()
form.display()
}

}

}