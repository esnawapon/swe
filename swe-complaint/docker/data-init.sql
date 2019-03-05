INSERT INTO public.staff(
	id, firstname, lastname, email, password, created, updated)
	VALUES
('10001', 'Jeanne', 'James', 'jeanne.james@bookacourse.com', '123', now(), now()),
('10002', 'Barney', 'Larson', 'barney.larson@bookacourse.com', '123', now(), now()),
('10003', 'Dillan', 'Mckee', 'dillan.mckee@bookacourse.com', '123', now(), now()),
('10004', 'Alyce', 'Atkinson', 'alyce.atkinson@bookacourse.com', '123', now(), now()),
('10005', 'Jim', 'Green', 'jim.green@bookacourse.com', '123', now(), now()),
('10006', 'Aran', 'Pollard', 'aran.pollard@bookacourse.com', '123', now(), now()),
('10007', 'Arissa', 'Simon', 'arissa.simon@bookacourse.com', '123', now(), now()),
('10008', 'Anabelle', 'Chandler', 'anabelle.chandler@bookacourse.com', '123', now(), now()),
('10009', 'Lisa', 'Camacho', 'lisa.camacho@bookacourse.com', '123', now(), now()),
('10010', 'Saara', 'Howell', 'saara.howell@bookacourse.com', '123', now(), now()),
('10011', 'Madison', 'Swan', 'madison.swan@bookacourse.com', '123', now(), now()),
('10012', 'Martine', 'Cunningham', 'martine.cunningham@bookacourse.com', '123', now(), now()),
('10013', 'Freddie', 'Foley', 'freddie.foley@bookacourse.com', '123', now(), now()),
('10014', 'Curtis', 'Santana', 'curtis.santana@bookacourse.com', '123', now(), now()),
('10015', 'Jean', 'Glass', 'jean.glass@bookacourse.com', '123', now(), now()),
('10016', 'Dana', 'Lopez', 'dana.lopez@bookacourse.com', '123', now(), now())
;

INSERT INTO public.complaint_category(
	id, name, default_topic, default_content, created, updated)
	VALUES ('10001', 'การแสดงผล', 'การแสดงผลที่หน้า... ', null, now(), now()),
 ('10002', 'ระบบทำงานผิดพลาด', 'ระบบทำงงานผิดพลาดที่หน้า... ', null, now(), now()),
 ('10003', 'เวลาเปิดใช้งาน', null, null, now(), now()),
 ('10004', 'ขั้นตอนการใช้งาน', null, null, now(), now()),
 ('10005', 'ความถูกต้องของข้อมูล', 'ความถูกต้องของข้อมูล ในหน้า... ', null, now(), now()),
 ('10006', 'ระบบทำงานช้า', 'ระบบทำงานช้าที่หน้า... ', null, now(), now())
;

INSERT INTO public.admin(
	id, firstname, lastname, email, password, created, updated)
	VALUES ('10001', 'Admin', 'Admin', 'admin@bookacourse.com', '123', now(), now());



INSERT INTO public.complaint(
	id, assignee_id, category_id, content, created, incognito, owner_id, satisfaction, severity, status, topic, updated)
	VALUES ('10001', null, null, 'หน้าค้นหาวิชาเรีนน เพราะ.... ควรที่จะ .......', now(), false, 'es.nawapon', null, 1, 'CREATED', 'การแสดงผลที่หน้าค้นหาวิชาเรีนร', now());