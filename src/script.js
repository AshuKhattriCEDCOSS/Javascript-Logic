var v;

function validate(){
    var n=document.getElementById("name").value;
   var a=document.getElementById("age").value;
   var w=document.getElementById("weight").value;
    if(n!="" && a!="" && w!=""){
        check(n,a,w);
    } 
    else{
        document.getElementById("output").innerHTML="Fill All Fields!!";
    }
}
function check(n,a,w){
  
if((a>=5 && a<=7 ) && (w>=15 || w<=20))
{
   v=("Hello "+n+" !!!! Your weight is perfect");
   display(v);
}
if((a>=5 && a<=7 ) && (w>20))
{
    v=("Hello "+n+" !!!! Your weight is greater than recommended value of 20KG at an age of "+a);
    display(v);
}
if((a>=5 && a<=7 ) && (w<15))
{
    v= ("Hello "+n+" !!!! Your weight is less than recommended value of 15KG at an age of "+a);
    display(v);
}
if((a>=8 && a<=10 ) && (w>=21 || w<=25))
{
   v=("Hello "+n+" !!!! Your weight is perfect");
   display(v);
}
if((a>=8 && a<=10 ) && (w>25))
{
    v=("Hello "+n+" !!!! Your weight is greater than recommended value of 25KG at an age of "+a);
    display(v);
}
if((a>=8 && a<=10 ) && (w<21))
{
    v= ("Hello "+n+" !!!! Your weight is less than recommended value of 21KG at an age of "+a);
    display(v);
}

if((a>=11 && a<=15 ) && (w>=26 || w<=30))
{
   v=("Hello "+n+" !!!! Your weight is perfect");
   display(v);
}
if((a>=11 && a<=15 ) && (w>30))
{
    v=("Hello "+n+" !!!! Your weight is greater than recommended value of 30KG at an age of "+a);
    display(v);
}
if((a>=11 && a<=15 ) && (w<26))
{
    v= ("Hello "+n+" !!!! Your weight is less than recommended value of 26KG at an age of "+a);
    display(v);
}
if((a>=16 && a<=20 ) && (w>=31 || w<=40))
{
   v=("Hello "+n+" !!!! Your weight is perfect");
   display(v);
}
if((a>=16 && a<=20 ) && (w>40))
{
    v=("Hello "+n+" !!!! Your weight is greater than recommended value of 40KG at an age of "+a);
    display(v);
}
if((a>=16 && a<=20 ) && (w<31))
{
    v= ("Hello "+n+" !!!! Your weight is less than recommended value of 31KG at an age of "+a);
    display(v);
}
if(a<5 || a>20){
    v="Enter Valid Age!!";
    display(v);
}
}
function display(answer){
    document.getElementById("output").innerHTML=answer;
}  