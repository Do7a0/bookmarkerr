var sumbtn=document.getElementById("sumbtn");
var inputname=document.getElementById("inputname");
var inputurl=document.getElementById(" inputurl");
var tbody=document.getElementById("tbody");
var deletebtn=document.getElementById("deletebtn");
var visitbtn=document.getElementById("visitbtn");
var ovarlaymn=document.getElementById("ovarlaymn");
var closebtn=document.getElementById("closebtn");


var allproduct=[];
sumbtn.addEventListener("click",add)
if(localStorage.getItem("allproducts") !=null){
    allproduct=JSON.parse(localStorage.getItem("allproducts"))
    display();
}
function add(){
    if(Valid()&&Validmail()){
        var product ={
            name :inputname.Value,
            Url :inputurl.aValue,
        }
        allproduct.push(product);
        localStorage.setItem("allproducts",JSON.stringify(allproduct))
        display()
        inputname.value="";
        inputurl.value="";


    }
    else{
        inputname.style.color="red";
        inputurl.style.color="red";

        inputname.style.borderColor="red";

        inputname.style.borderWidth="2px";

        inputurl.style.borderColor="red";
        inputurl.style.borderWidth="2px";
        ovarlaymn.classList.add("appear");

    }


}
function clear(){
    inputname.value="";
    inputurl.value="";

}
function display(){
    var box =``;
    for(var i=0 ; i<allproduct.length;i++){
        box +=`
        <tr>
        <th>${i +i}</th>
        <th>${allproduct[i].name}</th>
        <th>
        <button type="button" class="btn btn-success" id="visit" onclick ="visititem(${i})" >
        <i class="fa-solid fa-eye " ></i>
        visit</button>
        </th>
         <th> 
        <button type="button" class ="btn btn-danger" id ="delet" onclick ="visititem(${i})">
        <i class="fa-solid fa-trash-can " ></i>
        delet


        </button>
        </th>
        </tr>



        
        `
       
        



    }
    tbody.innerHTML=box;
}
function deletitem(index){
    allproduct.splice(index,1);
    localStorage.setItem("allproducts",JSON.stringify(allproduct));
    display();
    clear()
}
function visititem(index){
    window.open(allproduct[index].Url)
}
function Valid(){
    var nameregex=/^[A-Z][a-z]{1,9}$/gm;
    var testing= nameregex.test(inputname.value);
    if(testing===true){
        inputname.style.color="green";
        inputname.style.borderColor="green";
        inputname.style.borderWidth="2px";

        return true;
    }
    else{
        return false;
    }
}
function Validmail(){
    var Urlregex=
    
    // /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;


    // /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)
    // (?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;


    /[(http(s)?):\/\/(www\.)?a-z A-Z 0-9 @:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-z A-Z 0-9 @:%. _\+.~#?%//=])$/gm;
    var test =Urlregex.test(inputurl.value);
    if(test===true){
        inputurl.style.color="green";
        inputurl.style.borderColor="green";
        inputurl.style.borderWidth="2px";

        return true;


    }
    else{
        return false;
    }

    // function Validmail(userInput) {
    //     var regexQuery = "/(http(s)?://.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/";
    //     var url = new RegExp(regexQuery,"g");
    //     if (url.test(userInput)) {
    //         alert('Great, you entered an E-Mail-address');
    //         return true;
    //     }
    //     return false;
    // }











}
function checking(){
    ovarlaymn.classList.remove("appear");
    ovarlaymn.classList.add("clear");
}
sumbtn.addEventListener("click",Valid)
sumbtn.addEventListener("click",Validmail)
sumbtn.addEventListener("click",checking)




















































