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
            winnnersTable.innerHTML += '<tr> <td>winner</td> <td>winner</td> </tr>';
                 
        }
        console.log(winnnersTable.innerHTML);
    }
   

    
}


    