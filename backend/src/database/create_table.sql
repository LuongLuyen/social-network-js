use socialnetwork;

CREATE TABLE author(
  id bigint NOT NULL PRIMARY KEY auto_increment,
  name VARCHAR(255) NOT NULL,
);

CREATE TABLE mes (
  id bigint NOT NULL PRIMARY KEY auto_increment,
  content TEXT NOT NULL,
  author_id bigint NOT NULL,
);

ALTER TABLE mes ADD CONSTRAINT fk_mes_author FOREIGN KEY (mes) REFERENCES author(id);
