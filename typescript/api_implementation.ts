
const PATH ="https://api.nationalize.io/?name=";
async function getData(nume: string){

    let response = await fetch(PATH + nume, {
        method: "GET",
        mode: "cors"
    })
    let data = response.json()
    return data;
}
function onClick(){
    let name: string = (document.getElementById("name")as HTMLInputElement)?.value
    let list = document.getElementById("result_list");
    let  child = document.createElement("li");
    getData(name).then((response) => {
        if(response.country.length === 0){
            child.innerHTML="I can't decide your nationaity.Let's try again";
        }else{
            let text:string = 'You can be from:'
            response.country.forEach((description)=> text=text+description.country_id+" ");
            child.innerHTML=text;
        }
    });
    list.appendChild(child);
}