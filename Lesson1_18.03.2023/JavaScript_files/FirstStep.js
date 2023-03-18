function AlertFunction(){
    alert("Your first app work!!")
}
function ConfirmFunction(){
    if(confirm("Are you sure?").valueOf())
        alert("You choose - YES")
    else alert("You choose - NO")

}
function PromptFunction(){
   a = prompt("Print your age.")
    if(a.valueOf()) alert("you age is " + a)
    else alert("you not print your age")
}
function Sum(){
    a = Number(prompt("print a"))
    b = Number(prompt("print b"))
    if(a.valueOf()&&b.valueOf()) alert("Sum of " + a + " + " + b+ " = " +(a+b))
    else alert("please print values!!!")
}
function ArrayFunc(){
    var i;
    var days_of_week = new Array(7)
    days_of_week[0] = "Monday"
    days_of_week[1] = "Tuesday"
    days_of_week[2] = "Wednesday"
    days_of_week[3] = "Thursday"
    days_of_week[4] = "Friday"
    days_of_week[5] = "Saturday"
    days_of_week[6] = "Sunday"

    i = Number(prompt("Print number day of week (from 1 ) " , ""))-1
    alert("day of week "+days_of_week[i])

}
function ForFunc(){
    var days_of_week = new Array(7)
    days_of_week[0] = "Monday"
    days_of_week[1] = "Tuesday"
    days_of_week[2] = "Wednesday"
    days_of_week[3] = "Thursday"
    days_of_week[4] = "Friday"
    days_of_week[5] = "Saturday"
    days_of_week[6] = "Sunday"
    for (let i = 0; i < days_of_week.length; i++) {
        alert(days_of_week[i]+" ->***}")
    }
}
function whileFunc(){
    iter = Number(prompt("print iter -> "))
    while(iter>0){
        alert(iter +" -> iter")
        iter--
    }

}

function DoWhileFunc(){
    iter = prompt("print iter -> ")
    do{
        alert("Hi -> " + iter)
        iter--
    }while(iter>0)

}