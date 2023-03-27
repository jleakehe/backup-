//global variables
let result=10
//funtions
let score=17; //global variable
function hourToMin(hours){
    let result= hours*60 //local only used by function
    console.log(result);
    return result;
}
let a = hourToMin(38);
function daysToHours(days){
    return days*24
}
let day = daysToHours(16);
console.log(day);
day=daysToHours(1645)
console.log(day);
//checking an item 
let balance=100
let stock=50
let price= 5
//calling a function
sellItem(10)
//function declaration
function sellItem(quantity){
    if(stock>=quantity){
    stock-=quantity
    //stock = stock - quantity
    balance+-price*quantity
    //balance = balance + price * quantity
    console.log('purchase completed ', balance , '$' , stock , 'items left') 
    }
    else{
        console.log('no sale, try agian')
    }
}
 //objects
 let player={
     age: 37,
     hp: 1,
     energy: 'lots',
     size: 'Extra-Large',
     outfit:{
         color:'black',
         fabric:'leather',
         type:'armour'
     }
 }
 console.log(player); 
 //access parts of an object 
 console.log(player.age,player.size)
 console.log(player['age'])
 //modify pieces of our object 
 player.age=27
 console.log(player.age);
 player.outfit.color='orange';
 console.log(player);
 //add stuff to our object
 player.name='John Cena'
 console.log(player)
 //delete parts of our object
 delete player.outfit
 console.log(player)
//methods
let playe={
    health:100,
    fun:0,
    play: function(food){
        if(food=='apple'){
            this.health+=10
        }
        else if(food=='candy'){
            this.health+=5
            this.fun+=5
        }
    }
}
//call method
playe.play('apple')
console.log(playe)
playe.play('candy')
console.log(playe)
//hippo object
let hippo={
    hippoMurder:true,
    hippoAttack:function(playe){
        if(this.hippoMurder==true){
            player.health=0
            console.log('player is dead')
            console.log('better luck next time')
        }
    }
}
hippo.hippoAttack(playe)
//while loops
function sendHelp(){
    console.log('send help!')
}
let i=10;
while(i>0){
    sendHelp()
    i--
    //i=i-1
    //i-=1
}
for(let a=10;a>0;a--){
    sendHelp();
}



//practice
let man={
    hp:1000,
    speed:8,
    play: function(powerup){
        if(powerup=='lightning'){
            this.speed+=5
        }
        else if(powerup=='shield'){
            this.hp+=100
        }
    }   
}
man.play('lightning')
console.log(man)
man.play('shield')
console.log(man)

//arrays (lists)
let list=['immortal groundhog',138,'gobblers knob','he is right 42% of the time']
console.log(list)
//chnage the information 
list[3]='he is right 50%'
console.log(list)
//access information 
let groundhog=list[1]
console.log(groundhog)
//access the last piece of our list
let log=list [list.length-1]
let last=list.length
console.log(log)
console.log(last)
//list items
list.push('lives in the library')
console.log(list)
//delete the last item
list.pop()
console.log(list)
//iterating over arrays
let highScores=[78,97,105]
//increase all scores by 1 
let j=0
while(j<highScores.length){
    highScores[j]++
    j++
}
console.log(highScores)
let bestDay=[
    {
        title:'Groundhog Day',
        worth:'nothing',
        person: 'Mr. Black'
    },
    {
        title:'Feb. 26th',
        worth: 'quite a lot',
        person: 'Mr. Black'
    
    },
    {
        title: 'Feb.18th',
        perspm:'depends',
        person:'Kaden'
    }
]
bestDay.forEach(function(entry){
    if(entry.title=='Groundhog Day'){
        entry.title='GroundHog Day'
    }
    else if(entry.title!='Groundhog Day'){
        entry.title='GroundHog Day'
    }
})
console.log(bestDay)
//multidemensionalarrays
let array=[[1,2,3],[4,5,6],[7,8,9]]
console.log(array)
console.log(array[0][0])
let terrain=[
    ['dessert','dessert','forest','beach'],
    ['desesrt','forest','beach','island'],
    ['mine','forest','burned out forest','lake']
]
console.log(terrain)
terrain[0][3]='forest'
terrain[1][2]='forest'
console.log(terrain)
