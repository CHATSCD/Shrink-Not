const SUPABASE_URL = "https://ylfsqjbqhewpfiooytlg.supabase.co";

const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsZnNxamJxaGV3cGZpb295dGxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3NzQwODQsImV4cCI6MjA4ODM1MDA4NH0.Ssl5J6ktZIVtLd2cq8vH7PWdR4-yZwI5tt4PtXkVqWk";

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function doLogin(e){

e.preventDefault();

const user = document.getElementById("loginUser").value;
const pass = document.getElementById("loginPass").value;

const { data, error } = await sb
.from("app_users")
.select("*")
.eq("username", user)
.eq("password", pass)
.single();

if(error || !data){
alert("Login failed");
return;
}

document.getElementById("loginScreen").classList.add("hidden");
document.getElementById("appScreen").classList.remove("hidden");

initApp();

}
