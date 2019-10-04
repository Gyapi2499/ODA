INSERT INTO FOO(id, name, created_at, updated_at) VALUES(1, 'Kriszti�n', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
INSERT INTO FOO(id, name, created_at, updated_at) VALUES(2, '�d�m', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
INSERT INTO FOO(id, name, created_at, updated_at) VALUES(3, 'M�rk', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

insert into issue (title, description, place, created_at, updated_at) values ('The issue #1', 'Fatallica', 'PC42', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into issue (title, description, place, created_at, updated_at) values ('MegaIssue', 'MegaFatal', 'PC12', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into issue (title, description, place, created_at, updated_at) values ('Unknown issue', 'U.F.O', 'Air', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into issue (title, description, place, created_at, updated_at) values ('Broken Windows 10', 'Everywhere', 'PCxxx', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());

insert into message (issue_id, text, created_at, updated_at) values (1, 'The things', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into message (issue_id, text, created_at, updated_at) values (2, 'that should', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into message (issue_id, text, created_at, updated_at) values (3, 'not', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into message (issue_id, text, created_at, updated_at) values (3, 'be', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());

insert into label (text, created_at, updated_at) values ('labilis', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into label (text, created_at, updated_at) values ('e', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into label (text, created_at, updated_at) values ('az', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into label (text, created_at, updated_at) values ('illabilis', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());

insert into user (username, password, enabled, role) values ('user1', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..', true, 'ROLE_ADMIN');
insert into user (username, password, enabled, role) values ('user2', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..', true, 'ROLE_USER'); 


insert into issue_labels (issues_id, labels_id) values (1, 1);
insert into issue_labels (issues_id, labels_id) values (1, 2);
insert into issue_labels (issues_id, labels_id) values (1, 4);
insert into issue_labels (issues_id, labels_id) values (2, 1);
insert into issue_labels (issues_id, labels_id) values (2, 2);
insert into issue_labels (issues_id, labels_id) values (3, 2);
