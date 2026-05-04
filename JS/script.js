let form = document.forms['studentForm'];
form.addEventListener("submit", getValues);

function getValues (event){
    event.preventDefault(); 

    let name = this.userName.value;
    let email = this.userEmail.value;
    let meal = this.struggleMeal.value;

    let goal = this.userGoal.value || "Not selected";

    let age =document.getElementById('inputVal').value;
    
    let selectedWords = [];
    let checkBoxes = document.querySelectorAll(".about");
    for (let box of checkBoxes) {
        if (box.checked) {
            selectedWords.push(box.value);
        }
    }

    let outSection = document.querySelector(".code");

    outSection.innerHTML = `
        <li>Name: ${name}</li>
        <li>Email: ${email}</li>
        <li>Struggle Meal: ${meal}</li>
        <li>Goal: ${goal}</li>
        <li>Description: ${selectedWords.join(", ")}</li>
        <li>Age: ${age}</li>
    `;
};

decCount = () => 
{
 //extract element from HTML we want to work with//
 let num = document.getElementById('inputVal').value;
 //operate on it//
 if (num != 0){
   num -= 1;
 }
 // output to HTML again//
 document.getElementById('inputVal').value = num;
}

incCount = () => 
{
    let num = document.getElementById('inputVal').value;
    num ++;
    document.getElementById('inputVal').value = num;
}
