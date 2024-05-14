$(".header").click(function(event){
    $(this).addClass("selected");

    for(var i=1; i< 8; i++){
        if($(this).hasClass(("col"+[i]))){

            for(var j = 1; j < 7; j++){
                if($((".space.row"+[j]+".col"+[i])).hasClass("computerPiece")===false &&
                $((".space.row"+[j]+".col"+[i])).hasClass("new")===false)  {
                    $((".space.row"+[j]+".col"+[i])).addClass("new");
                    j=7;
                    $(this).removeClass("selected");  
                    endGame();
                }
            }   
        }
    }

    setTimeout(computerTurn, 500);
});   


function computerTurn(){

    var open = true;
    while(open === true){

        var computerColumn = Math.floor(Math.random()*7)+1;
        console.log(computerColumn);
        for(var j = 1; j < 7; j++){
            console.log(j);
            if($((".space.row"+[j]+".col"+[computerColumn])).hasClass("computerPiece")===false &&
            $((".space.row"+[j]+".col"+[computerColumn])).hasClass("new")===false) {
                $((".space.row"+[j]+".col"+[computerColumn])).addClass("computerPiece");
                open = false;
                j = 7;
                endGame();
                
            }  
        }
    }
}

function endGame(){
    //horizontal win

    //you win
    for(var i = 1; i < 4; i++){
        for(var j = 1; j < 7; j++){
            if($((".space.row"+[j]+".col"+[i])).hasClass("new") &&
            $((".space.row"+[(j+1)]+".col"+[i])).hasClass("new") &&
            $((".space.row"+[(j+2)]+".col"+[i])).hasClass("new") &&
            $((".space.row"+[(j+3)]+".col"+[i])).hasClass("new")){
                $("h1").addClass("end");
                $("h1").text("You Win!");  
                reloadWindow(); 
            }

        }
    }
    //computer wins
    for(var i = 1; i < 4; i++){
        for(var j = 1; j < 7; j++){
            if($((".space.row"+[j]+".col"+[i])).hasClass("computerPiece") &&
            $((".space.row"+[(j+1)]+".col"+[i])).hasClass("computerPiece") &&
            $((".space.row"+[(j+2)]+".col"+[i])).hasClass("computerPiece") &&
            $((".space.row"+[(j+3)]+".col"+[i])).hasClass("computerPiece")){
                $("h1").addClass("end");
                $("h1").text("Computer Wins!");
                reloadWindow();   
            }

        }
    }
    //vertical win
    //you win
    for(var i = 1; i < 8; i++){
        for(var j = 1; j < 3; j++){
            if($((".space.row"+[j]+".col"+[i])).hasClass("new") &&
            $((".space.row"+[j]+".col"+[(i+1)])).hasClass("new") &&
            $((".space.row"+[j]+".col"+[(i+2)])).hasClass("new") &&
            $((".space.row"+[j]+".col"+[(i+3)])).hasClass("new")){
                $("h1").addClass("end");
                $("h1").text("You Win!"); 
                reloadWindow();   
            }

        }
    }
    //computer wins
    for(var i = 1; i < 8; i++){
        for(var j = 1; j < 3; j++){
            if($((".space.row"+[j]+".col"+[i])).hasClass("computerPiece") &&
            $((".space.row"+[j]+".col"+[(i+1)])).hasClass("computerPiece") &&
            $((".space.row"+[j]+".col"+[(i+2)])).hasClass("computerPiece") &&
            $((".space.row"+[j]+".col"+[(i+3)])).hasClass("computerPiece")){
                $("h1").addClass("end");
                $("h1").text("Computer Wins!");
                reloadWindow();   
            }

        }
    }

}

function reloadWindow(){
    setTimeout(function() {
        window.location.reload();
     }, 5000);
}

// function safetyCheck(){
//     if($(".space.row6.col1").hasClass("computerPiece")===true &&
//     $(".space.row6.col1").hasClass("new")===true &&

//     $(".space.row6.col2").hasClass("computerPiece")===true &&
//     $(".space.row6.col2").hasClass("new")===true &&

//     $(".space.row6.col3").hasClass("computerPiece")===true &&
//     $(".space.row6.col3").hasClass("new")===true &&

//     $(".space.row6.col4").hasClass("computerPiece")===true &&
//     $(".space.row6.col4").hasClass("new")===true &&

//     $(".space.row6.col5").hasClass("computerPiece")===true &&
//     $(".space.row6.col5").hasClass("new")===true &&

//     $(".space.row6.col6").hasClass("computerPiece")===true &&
//     $(".space.row6.col6").hasClass("new")===true &&

//     $(".space.row6.col7").hasClass("computerPiece")===true &&
//     $(".space.row6.col7").hasClass("new")===true){
//         $("h1").text("Game Over");
//         $("h1").addClass(endGame);
//     }

// }
    




    
    
  
        
    







