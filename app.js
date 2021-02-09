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
        alert("Ingrese un numero valido");
    }
    else
    {
        winnnersTable.innerHTML='';

        for (let i = 0; i < winnerQuantity; i++)
        {
            if(i== 0)
            {
                winnnersTable.innerHTML += '<tr class ="winner"> <td>@missjulyjuly</td> </tr>';
                 
            }
            else{
                var x = Math.floor((Math.random() * jsonData.length ) + 1);
                var winner = jsonData[x]
                winnnersTable.innerHTML += '<tr class ="winner"> <td>@'+winner['owner']['username']+'</td> </tr>';
                 
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
       var original = element['text'];
       var croppedString = original.substr(0,10) 
       
       table.innerHTML += '<tr><td class="commenter">@'+element['owner']['username']+'</td><td>'+croppedString+'...</td></tr>'
   });





    
    
}




    