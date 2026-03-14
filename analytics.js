let chart;

function renderAnalytics(data){

const ctx = document.getElementById("chartBar");

if(chart) chart.destroy();

chart = new Chart(ctx,{

type:"bar",

data:{
labels:data.labels,
datasets:[{
label:"Shrinkage",
data:data.values
}]
}

});

}
