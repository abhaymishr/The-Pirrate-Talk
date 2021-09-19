var btnTranslate=document.querySelector("#btn-translate")
var txtInput=document.querySelector("#btn-textarea")
var outputDiv=document.querySelector("#output")




var serverUrl="https://api.funtranslations.com/translate/pirate.json"
function getTranslationUrl(text){

    return serverUrl+"?"+"text="+text
}

function errorHandler(error){
    console.log("Error Occured",error)
    alert("Server is Down !!")
}







btnTranslate.addEventListener("click", clickHandler)

function clickHandler(){
  var text=txtInput.value
  
fetch(getTranslationUrl(text))
.then(response=>response.json())
.then(json=>{
    var translatedText=json.contents.translated
    outputDiv.innerText=translatedText}
    )
.catch(errorHandler)

}





