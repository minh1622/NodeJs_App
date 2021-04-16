create database server_login_test;

create table `role`(
	`roleId` int not null,
    `role_name` nvarchar(255) not null,
    primary key (roleId)
);

create table `user_login`(
	`userId` int not null auto_increment,
    `username` nvarchar(255) not null,
    `password` nvarchar(255) not null,
    `user_role` int not null,
    primary key (userId),
    foreign key (user_role) references role(roleId)
);
alter table user_login auto_increment = 1;

insert into role(roleId, role_name) values (1, "Admin");
insert into role(roleId, role_name) values (2, "User");
insert into user_login(username, password, user_role) values("admin", "anhmaiyeuem2", 1);
insert into user_login(username, password, user_role) values("user", "123456", 2);
insert into user_login(username, password, user_role) values("minh1622", "anhmaiyeuem1A", 2);