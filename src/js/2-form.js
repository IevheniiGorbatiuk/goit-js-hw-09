const STORAGE_KEY = "feedback-form-state";
const feedbackForm = document.querySelector("form");
const textarea = document.querySelector('textarea');
let formInfo = {};
feedbackForm.addEventListener("input", onFormInput);
feedbackForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = feedbackForm.elements.email.value;
    const text = feedbackForm.elements.message.value;
    const data ={
        email,
        text,
    }
    if(email != "" && text != ""){
    feedbackForm.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(data);
    }
})

function onFormInput(e){
    const email = feedbackForm.elements.email.value;
    const text = feedbackForm.elements.message.value;
    const data ={
        email,
        text,
    }
    saveToLS(STORAGE_KEY, data);
}
function saveToLS(key, value){
    const zip = JSON.stringify(value);
    localStorage.setItem(key, zip);
}
function loadFromLS(key){
    const zip = localStorage.getItem(key);
    try{
        return JSON.parse(zip);
    }catch{
        return zip;
    }
}
function restoreData(){
    const data = loadFromLS(STORAGE_KEY) || {};
    feedbackForm.elements.email.value = data.email || "";
    feedbackForm.elements.message.value = data.text || "";
}
restoreData();