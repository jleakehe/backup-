//2nd project 
//objects
let hero={
    health:100,
    power: 30,
}
let monster={
    monsterAttack:true,
    monsterMurder:function(hero){
        if(this.monsterAttack==true){
            hero.health=health-20
            console.log('player has taken 20 damage')
        }
    }
}
    


//functions 