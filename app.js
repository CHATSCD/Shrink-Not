// SUPABASE CONNECTION
const SUPABASE_URL = "https://ylfsqjbqhewpfiooytlg.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsZnNxamJxaGV3cGZpb295dGxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3NzQwODQsImV4cCI6MjA4ODM1MDA4NH0.Ssl5J6ktZIVtLd2cq8vH7PWdR4-yZwI5tt4PtXkVqWk";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


// START SHIFT
async function startShift(){

const store = document.getElementById("storeSelect").value;

try{

const {error} = await supabaseClient
.from("shift_logs")
.insert([{
store:store,
start_time:new Date().toISOString()
}])

if(error){

alert("Error starting shift");
console.error(error);
return;

}

alert("Shift started");

loadActiveShifts();

}catch(err){

console.error(err);
alert("Network error");

}

}


// LOAD ACTIVE SHIFTS
async function loadActiveShifts(){

const shiftSelect=document.getElementById("shiftSelect");

shiftSelect.innerHTML="";

try{

const {data,error}=await supabaseClient
.from("shift_logs")
.select("id,store,start_time")
.is("end_time",null)
.order("start_time",{ascending:false})

if(error){

console.error(error);
return;

}

data.forEach(shift=>{

const option=document.createElement("option");

option.value=shift.id;

option.textContent=
shift.store+" - "+
new Date(shift.start_time).toLocaleString();

shiftSelect.appendChild(option);

})

}catch(err){

console.error(err)

}

}


// END SHIFT
async function endShift(){

const shiftId=document.getElementById("shiftSelect").value;

if(!shiftId){

alert("Select shift to end");
return;

}

try{

const {error}=await supabaseClient
.from("shift_logs")
.update({
end_time:new Date().toISOString()
})
.eq("id",shiftId)

if(error){

alert("Error ending shift");
console.error(error);
return;

}

alert("Shift ended");

loadActiveShifts();

}catch(err){

console.error(err);
alert("Network error");

}

}


// INITIAL LOAD
loadActiveShifts();
