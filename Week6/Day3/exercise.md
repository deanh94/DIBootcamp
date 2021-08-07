CREATE TABLE films(
    ID SERIAL PRIMARY KEY,
    film_title VARCHAR (100) NOT NULL,
    description VARCHAR (100) NOT NULL,
    language VARCHAR (50) NOT NULL
)

CREATE TABLE languages(
    wordly SERIAL PRIMARY KEY,
    lang_type VARCHAR (50) NOT NULL
)

INSERT INTO films(film_title)
VALUES ("Once upon a time" "Aladin", "3 little monkeys");

INSERT INTO films(description)
VALUES ("drama", "children's movie", "childrens movie");

INSERT INTO films(language)
VALUES("english");

SELECT films.film_title, films.description, films.description
FROM films
FULL OUTER JOIN languages
ON films.ID = languages.wordly



CREATE TABLE new_film(
    newones SERIAL PRIMARY KEY,
    id INTEGER NOT NULL,
    name VARCHAR (50) NOT NULL
)

INSERT INTO new_film(id)
VALUES (1 , 2, 3)
INSERT INTO new_film(name)
VALUES ("cars", "madagascar", "cars")

CREATE TABLE customer_review(
    review_id SERIAL PRIMARY KEY
    film_id VARCHAR REFERENCES new_film(name) ON DELETE CASCADE,
    language_id INTEGER REFERENCES languages(language) ON DELETE CASCADE,
    title VARCHAR (50) NOT NULL,
    score INTEGER NOT NULL,
    review_text VARCHAR NOT NULL,
    last_update VARCHAR (50) NOT NULL
)

INSERT INTO customer review(review_id film_id, language_id, title, score, review_text, last_update)
VALUES ("cars", "english", "review of 'cars'", 10, "the movie was great!", "last updated march 13,2021")

INSERT INTO customer review(review_id film_id, language_id, title, score, review_text, last_update)
VALES ("madagascar", "english", "review of 'madagascar'", 7, "the movie was better than expected", "april 20,2019")

