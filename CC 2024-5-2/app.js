/*
Create a function that gives a personalized greeting. This function takes two parameters: name and owner." Use conditionals to return the proper message:

name equals owner 'Hello boss'

otherwise 'Hello guest'
*/

//Answer//

function greet (name, owner) {
    if(name === owner){
      return "Hello boss"
    } else{
      return "Hello guest"
    }
  }

