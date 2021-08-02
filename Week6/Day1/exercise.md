<!-- ex1 -->
CREATE TABLE items (
 	items_id SERIAL PRIMARY KEY,
 	desk_type VARCHAR (50) NOT NULL,
	desk_price VARCHAR (100) NOT NULL
)
DROP TABLE items
INSERT INTO items(desk_type, desk_price)
VALUES('smalldesk', '100'),('bigdesk' , '300'),('fan', '80');


CREATE TABLE customers (
 	name_id SERIAL PRIMARY KEY,
 	cust_name VARCHAR (100) NOT NULL

)

INSERT INTO customers("cust_name")
VALUES('Greg Jones'), ('Sandra Jones'), ('Scott Scott'), ('Trevor Green'), ('Melanie Johnson')

<!-- dailyc -->
CREATE TABLE actors(
actor_id SERIAL PRIMARY KEY,
first_name VARCHAR (50) NOT NULL,
last_name VARCHAR (100) NOT NULL
)
INSERT INTO actors(first_name, last_name)
VALUES('Matt', 'Damon'),('George', 'Clooney');

SELECT 
first_name,
last_name
FROM
actors;
INSERT INTO actors(first_name, last_name)
VALUES('Charlie', 'Sheen');