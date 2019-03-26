insert into users (
    first_name, last_name, email, password 
) values (
    'clare', 'barton', 'clare@clare.com', 'gobbledegook'),
    ('jodi', 'bray', 'jodi@jodi.com', 'flibbertigibbet'),
    ('hunter', 'henson', 'hunter@hunter.com', 'whillothsp'),
    ('jamie', 'henson', 'jamie@jamie.com', 'omniumgatherum'),
    ('bradan', 'bray', 'bradan@bradan.com', 'buttcheeksmcyall'
);

insert into restaurants (
    name, address, city, state, phone, menu, picture
    ) values (
    'hankook', '123 marietta blvd', 'atlanta', 'ga', '706-542-0000', 'bibimbap and sesame fries', ''),
    ('veselka', '5th and 22nd', 'nyc', 'ny', '8923u484u2398', 'borscht', ''),
    ('golden corral', '1st main st', 'marietta', 'ga', '73739483749893', 'all the food', ''),
    ('grilled cheese heaven', '55 icantremember st', 'atlanta', 'ga', '73893628493839', 'grilled cheezy',''),
    ('tacosRus', '1 taco st', 'mableton', 'ga', '83720203830', 'all the tacos', ''
);

insert into favorites (
    user_id, restaurant_id
    ) values (
    1,1),
    (2,2),
    (3,3),
    (4,4),
    (5,5
);

insert into reviews (
    score, content, user_id, restaurant_id
    ) values (
    '5', 'more please', '1', '1'),
    ('5', 'sesame fries give me life', '2', '1'
);