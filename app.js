const JSON_PATH = "comments.json";
var jsonData;
function DraftWinners()
{


    LoadWinnersTable(GetWinnersQuantity());

    ////alert("And the winner is! @missJulily");
}

function GetWinnersQuantity()
{
    //*Capute the value of the imput.
    var quantity = document.getElementById("numberQuantity").value;
    console.log(quantity);
    return quantity;

   
}

/**
 * function to load the quantity of winners into a table.
 * @param {*} winnerQuantity The quantity of winners you want to appear in the table
 */
function LoadWinnersTable(winnerQuantity)
{
    var winnnersTable = document.getElementById("winnersTable");
    if(winnerQuantity == '' || winnerQuantity == 0){
        alert("Please, select a valid number");
    }
    else
    {
        winnnersTable.innerHTML='';

        for (let i = 0; i < winnerQuantity; i++)
        {
            if(i== 0)
            {
                winnnersTable.innerHTML += '<tr class ="winner"> <td>@MissJulyJuly</td> </tr>';
                 
            }
            else{
                winnnersTable.innerHTML += '<tr class ="winner"> <td>@loremIpsumDolor</td> </tr>';
                 
            }
            
        }
        console.log(winnnersTable.innerHTML);
       
    }

    ExtractCommentsFromJson();
   

    
}


async function ExtractCommentsFromJson()
{

    var index = 0;

    /**
     *  fetch('./comments.json')
        .then(results => results.json())
        .then(console.log);
    */

    
   var data = await fetch('./comments.json')

   jsonData = await data.json()

   //// DEBUG console.log(jsonData);


   jsonData.forEach(element => {

    
       //// DEBUG console.log(element['owner']['username']);
       var table = document.getElementById("commenters");

       
       table.innerHTML += '<tr><td class="commenter">@'+element['owner']['username']+'</td><td>comment</td></tr>'
   });





    
    
}




    