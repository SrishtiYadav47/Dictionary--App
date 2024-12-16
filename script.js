//window.alert("hii");
const mydict={
    "anonymous":"without any name",
    "black":"type of color",
    "ai":"Artifical intelligance",
    "tremble":"vibrate",
    "adversity":"misfortune",
    "abate":"decrease",
    "awkward":"rude",
    "consolidate":"solidify",
    "Denounce":"boycott",
    "Eccentric":"strange",


};
function search(){
  var word=document.getElementById('word').value.toLowerCase();
  var means=document.getElementById('meaning'); 
  if(word==""){
    window.alert("Enter any words");
  }
  var defination=mydict[word];
  //window.alert("defination");
  if (defination){
    means.innerHTML=defination;
  }
else{
    means.innerHTML="word not found!!!!!!!";
    means.style.backgroundColor="white";
}
  
}