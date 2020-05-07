create database favMovies;

use favMovies;

create table if not exists USERS ( 
	ID_USERS int not null auto_increment,
	USERS varchar(50) not null,
	PASSWORD_USERS varchar(50) not null,
	primary key(ID_USERS)
);

create table if not exists FILMS ( 
	ID_FILM int not null auto_increment,
    ID_USERS int not null,
    TITLE varchar(50) not null,
	YEAR_FILM varchar(4) not null,
	ACTORS varchar(150) not null,
    PLOT varchar(300) not null,
    AVALIATION int,
    COMMENTS varchar(300),
	primary key(ID_FILM),
    foreign key(ID_USERS) references USERS(ID_USERS) on delete cascade
);

create table if not exists SERIES ( 
	ID_SERIE int not null auto_increment,
    ID_USERS int not null,
    TITLE varchar(50) not null,
	YEAR_SERIE varchar(10) not null,
	ACTORS varchar(150) not null,
    PLOT varchar(300) not null,
    AVALIATION int,
    COMMENTS varchar(300),
	primary key(ID_SERIE),
    foreign key(ID_USERS) references USERS(ID_USERS) on delete cascade
);

insert into USERS(USERS, PASSWORD_USERS) values ('admin', '123');
insert into FILMS(ID_USERS, TITLE, YEAR_FILM, ACTORS, PLOT, AVALIATION, COMMENTS) 
values ( 1, 'Batman', '2001', 'Christian Bale', 'Batman é um héroi', 5, 'Muito bom');
insert into SERIES(ID_USERS, TITLE, YEAR_SERIE, ACTORS, PLOT, AVALIATION, COMMENTS) 
values ( 1, 'Two and half man', '2003', 'Charlie Sheen', 'Charlie é um compositor de jingle', 5, 'Muito bom');

select * from USERS;
select * from FILMS;
select * from SERIES;