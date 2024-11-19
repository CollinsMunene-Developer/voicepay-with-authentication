CREATE TABLE users (
    user_id UUID PRIMARY KEY REFERENCES auth.users(id),
    first_name TEXT,
    last_name TEXT,
    username TEXT UNIQUE,
    email TEXT UNIQUE,
    mobile_number TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);-- Create users table if it doesn't exist
create table if not exists public.users (
  id uuid references auth.users on delete cascade primary key,
  first_name text,
  last_name text,
  username text unique,
  email text unique,
  phone_number text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.users enable row level security;

-- Create policies
create policy "Users can view their own profile" 
  on public.users for select 
  using ( auth.uid() = id );

create policy "Users can insert their own profile" 
  on public.users for insert 
  with check ( auth.uid() = id );