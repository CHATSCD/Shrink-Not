create table if not exists shift_logs (

id uuid primary key default gen_random_uuid(),

store text,

start_time timestamp with time zone,

end_time timestamp with time zone,

created_at timestamp with time zone default now()

);

alter table shift_logs enable row level security;

create policy "allow public shifts"
on shift_logs
for all
to anon
using (true)
with check (true);
