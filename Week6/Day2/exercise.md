<!-- PART 1 -->
CREATE TABLE items (
 	items_id SERIAL PRIMARY KEY,
 	desk_type VARCHAR (50) NOT NULL,
    desk_price INTEGER NOT NULL
)

SELECT * FROM items ORDER BY desk_price ASC <!-- 1. -->
SELECT * FROM items ORDER BY desk_price DSC <!-- 2. -->
SELECT * FROM items ORDER BY desk_type ASC <!-- 3 -->

<!-- PART 2 -->
CREATE TABLE purchases (
	ID serial NOT NULL PRIMARY KEY,
	secret VARCHAR (100) NOT NULL,
	name text UNIQUE NOT NULL
);

INSERT INTO purchases (desk_type)
SELECT * FROM items;

INSERT INTO purchases(DataName, Height, Weight, Eye Color, Location)
VALUES ('John', '5"9', '180', 'Green', 'New York');


