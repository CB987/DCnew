create table users (
    id serial primary key,
    first_name varchar(100), --"varchar" is equivalent to "character varying"
    last_name varchar(100), --"varying" just means that it won't be filled with spaces
    email varchar(50),
    password varchar(500) --DON'T STORE PASSWORDS unencrypted, only "hashes"
);

create table restaurants (
    id serial primary key,
    name varchar(200),
    address varchar(200),
    city varchar(200),
    state varchar(50),
    phone varchar(20),
    menu varchar(200),
    picture varchar(500)  --(DON'T store images in the db. use url)
    -- restaurants have mulitple reviews, so the review table gets the foreign key, not this table
);


-- when to do a linking table:
-- users can have many favorites
-- restaurants can have many favorites
-- users have many restaurants through favorites
-- restaurants have many users through favorites
create table favorites (
    id serial primary key, --for a linking table this is actually optional
    user_id integer references users(id),
    restaurant_id integer references restaurants(id)
    -- reviews text -- if you include any unique information, then you would use the primary id
    --but wait, "reviews" is plural-- a field that naturally is plural really needs its own table
);

create table reviews (
    id serial primary key,
    score integer,
    content text,
    -- a single review belongs to a single user and single restaurant, therefore need a foreign key to restaurant and user
    user_id integer references users(id),
    restaurant_id integer references restaurants(id)
);