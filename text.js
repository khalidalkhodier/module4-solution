(function() {

	//here we create an array 
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    
    //here we use for loop from zero to the array length for the perpose is to get all neame 
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
    
        //here we apply if condition to check in array if name start with "j" then if condition is work otherwise else  condition is going to work.....
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();