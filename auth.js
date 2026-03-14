const SUPABASE_URL = "https://ylfsqjbqhewpfiooytlg.supabase.co";
const SUPABASE_KEY = "YOUR_SUPABASE_ANON_KEY";

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function doLogin(e){

e.preventDefault();

const user = document.getElementById("loginUser").value;
const pass = document.getElementById("loginPass").value;

const { data } = await sb
.from("app_users")
.select("*")
.eq("username", user)
.eq("password", pass)
.single();

if(!data){
alert("Login failed");
return;
}

document.getElementById("loginScreen").classList.add("hidden");
document.getElementById("appScreen").classList.remove("hidden");

initApp();

}
