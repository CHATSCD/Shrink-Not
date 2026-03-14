const KRATOM = [
{ id:"k1", name:"Viva Zen Ultimate" },
{ id:"k2", name:"Viva Zen Red Top" },
{ id:"k3", name:"Kryptic Kratom" }
];

function initApp(){
buildTable();
}

function buildTable(){
const body = document.getElementById("kratomBody");
body.innerHTML = "";

KRATOM.forEach(p => {
body.innerHTML += `
<tr>
<td>${p.name}</td>
<td><input id="b-${p.id}" type="number"></td>
<td><input id="s-${p.id}" type="number"></td>
<td><input id="e-${p.id}" type="number"></td>
<td id="v-${p.id}">0</td>
</tr>
`;
});
}

function submitCount(){
alert("Shift submitted");
}

function showTab(tab){
document.querySelectorAll("[id^='tab-']").forEach(t=>{
t.classList.add("hidden")
})
document.getElementById("tab-"+tab).classList.remove("hidden")
}
