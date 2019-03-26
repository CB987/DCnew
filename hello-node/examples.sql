-- user profile
-- 1. get all infor for a user by id   
SELECT * FROM users WHERE id = 1;

--     1a. get only a few fields for public verson
SELECT u.first_name, r.content 
    FROM users u
    INNER JOIN reviews r
    ON u.id = r.user_id
    WHERE id = 1;

-- 2. get all favorites for a user by id
SELECT u.first_name, r.name
	FROM users u
	INNER JOIN favorites f
	ON u.id = f.user_id
	INNER JOIN restaurants r
	ON f.restaurant_id = r.id
	WHERE u.id = 1; 

-- 3. get all reviews written by that user by id
SELECT u.first_name, r.name, rev.score, rev.content
	FROM users u
	INNER JOIN favorites f ON u.id = f.user_id
	INNER JOIN restaurants r ON f.restaurant_id = r.id
	INNER JOIN reviews rev ON r.id = rev.restaurant_id
	WHERE u.id = 1;

-- restaurant profile
-- 1. get all info for a restaurant by id
SELECT * FROM restaurants WHERE id = 2;
-- 2. get all review for restaurant by id
SELECT content FROM reviews WHERE restaurant_id = 1;
-- 3. get average review for a restaurant by id
SELECT AVG(score) FROM reviews WHERE restaurant_id = 1;
-- 4. get count of favorites for restaurant by id
SELECT COUNT(restaurant_id) FROM favorites WHERE restaurant_id = 1;

-- restaurant search result
-- 1. get all matching rows for restaurant by name (case insensitive search)
SELECT * FROM restaurants WHERE name ilike '%d%';
--     1b. include average review
SELECT r.name, AVG(rev.score)
	FROM restaurants r
	INNER JOIN reviews rev ON r.id = rev.restaurant_id
	WHERE name ilike '%k%'
	GROUP BY r.name;
--     1c. include number of favorites
SELECT r.name, AVG(rev.score), COUNT(f.restaurant_id) as Faves
	FROM restaurants r
	INNER JOIN reviews rev ON r.id = rev.restaurant_id
	INNER JOIN favorites f ON r.id = f.restaurant_id
	WHERE name ilike '%k%'
	GROUP BY r.name;
-- 2. limit by minimum review
SELECT r.name, AVG(rev.score), COUNT(f.restaurant_id) as Faves
	FROM restaurants r
	INNER JOIN reviews rev ON r.id = rev.restaurant_id
	INNER JOIN favorites f ON r.id = f.restaurant_id
	WHERE name ilike '%k%' and rev.score > 4
	GROUP BY r.name;
-- 3. SUPER BONUS pagination