-- Up
CREATE TABLE Owner (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT
);

CREATE TABLE Pet (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  animal TEXT,
  breed TEXT,
  ownerId INTEGER REFERENCES Owner(id)
);

INSERT INTO Owner(name, email) values ('francis', 'francis@gmail.com');
INSERT INTO Owner(name, email) values ('cherrie', 'cherrie@gmail.com');

INSERT INTO Pet (animal, breed, ownerId) values ('dog', 'corgi', 1);
INSERT INTO Pet (animal, breed, ownerId) values ('snake', 'python', 2);

-- DOWN
DROP TABLE Owner;
DROP TABLE Pet;