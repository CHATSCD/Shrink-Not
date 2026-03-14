async function loadUsers(){

const { data } = await sb
.from("app_users")
.select("*");

const table = document.getElementById("usersTable");

table.innerHTML = "";

data.forEach(u => {

table.innerHTML += `
<div class="p-2 border-b">
${u.name} — ${u.role}
</div>
`;

});

}
