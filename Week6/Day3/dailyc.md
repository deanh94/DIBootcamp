CREATE TABLE animals_a (
    animals_a_id SERIAL,
    aAnimals VARCHAR (30) NOT NULL,
    PRIMARY KEY (animals_a_id) 
)

INTERT INTO animals_a(aAnimals)
VALUES("eagle", "pigeon")

CREATE TABLE animals_l (
    animals_l_id SERIAL,
    lAnimals VARCHAR (30) NOT NULL
    PRIMARY KEY (animals_l_id)
)

INTERT INTO animals_l(lAnimals)
VALUES("monkey", "squirrel")

CREATE TABLE animals_all (
    animals_a_id INTEGER NOT NULL
    animals_l_id INTEGER NOT NULL
    PRIMARY KEY (animals_a_id, animals_l_id)
    FOREIGN KEY (animals_a_id) REFERENCES animals_a(animals_a_id) ON UPDATE 
    FOREIGN KEY (animals_l_id) REFERENCES animals_a(animals_l_id) ON UPDATE CASCADE
)

INSERT into animals_all(aAnimals, lAnimals) VALUES 
((SELECT aAnimals FROM animals_a where aAnimals = "eagle", "pigeon"))
((SELECT lAnimals FROM animals_a where lAnimals = "monkey", "squirrel"))




