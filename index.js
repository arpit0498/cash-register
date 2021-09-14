var billAmount = document.querySelector("#bill-amount");
var cashAmount = document.querySelector("#cash-given");
var checkButton = document.querySelector("#check-button");
var nextButton = document.querySelector("#next-button");
var message = document.querySelector("#error-message");
var noOfNotes = document.querySelectorAll(".no-of-notes");
var showAfterNext = document.querySelector("#show-after-next");

var availableNotes = [2000, 500, 100, 20, 10, 5, 1];

showAfterNext.style.display = "none";

nextButton.addEventListener("click", function handleNextButton() {
    showAfterNext.style.display = "block";
});

checkButton.addEventListener("click", handleChange);

function showSecondInput() { }

function showMessage(msg) 
{
    message.style.display = "block";
    message.innerText = msg;
}
function calculateChange(balance) 
{
    for (let i = 0; i < availableNotes.length; i++) {
        var notes = Math.trunc(balance / availableNotes[i]);
        balance = balance % availableNotes[i];
        noOfNotes[i].innerText = notes;
    }
}

function handleChange() 
{
    message.style.display = "none";
    if (billAmount.value > 0)
    {
        if (billAmount.value <= cashAmount.value)
        {
            var balance = cashAmount.value - billAmount.value;
            calculateChange(balance);
        }   else
                {
                    showMessage("Do you wanna chores?");
                }
    }       else 
            {
                showMessage("Please enter valid Bill amount!");
            }
}