//nested scopes

function one (){
    const username = " bochie"

    function two (){
        const website ="disboard"
        console.log(username)
    }
    // console.log(website);

    two()
}
one()


// closure -> andar ka function bahar kay variable ko use kar paata hai ,basically child functions parent functions kay variables ko use kar paae hai 

// +++++++++++++++++ INTRESTING +++++++++++++++++

console.log(addone(5)); //this don't generate error 

function addone(num){
    return num +1 ;
}

//another way to make functions

console.log(addTwo(5)) //this generate error

const addTwo = function(num){
    return num+2
}


// --concept of hoisting--






