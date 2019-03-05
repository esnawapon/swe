DROP TABLE public.admin;
DROP TABLE public.auto_forwarder_log;
DROP TABLE public.complaint_category;
DROP TABLE public.complaint_category_staff_mapping;
DROP TABLE public.complaint_keyword_staff_mapping;
DROP TABLE public.complaint_log;
DROP TABLE public.staff;
DROP TABLE public.complaint;

-- Table: public.admin

CREATE TABLE public.admin
(
    id text NOT NULL,
    firstname text COLLATE pg_catalog."default" NOT NULL,
    lastname text COLLATE pg_catalog."default" NOT NULL,
    email text COLLATE pg_catalog."default" NOT NULL,
    password text COLLATE pg_catalog."default" NOT NULL,
    created timestamp with time zone NOT NULL,
    updated timestamp with time zone NOT NULL,
    CONSTRAINT admin_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.admin
    OWNER to postgres;

-- Table: public.auto_forwarder_log

CREATE TABLE public.auto_forwarder_log
(
    id text NOT NULL,
    complaint_id text NOT NULL,
    success boolean NOT NULL,
    relevant_staff_id text,
    created timestamp with time zone NOT NULL,
    updated timestamp with time zone NOT NULL,
    CONSTRAINT auto_forwarder_log_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.auto_forwarder_log
    OWNER to postgres;

-- Table: public.complaint_category

CREATE TABLE public.complaint_category
(
    id text NOT NULL,
    name text COLLATE pg_catalog."default" NOT NULL,
    default_topic text COLLATE pg_catalog."default",
    default_content text COLLATE pg_catalog."default",
    created timestamp with time zone NOT NULL,
    updated timestamp with time zone NOT NULL,
    CONSTRAINT complaint_category_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.complaint_category
    OWNER to postgres;

-- Table: public.complaint_category_staff_mapping

CREATE TABLE public.complaint_category_staff_mapping
(
    id text NOT NULL,
    staff_id text NOT NULL,
    category_id text NOT NULL,
    priority integer,
    created timestamp with time zone NOT NULL,
    updated timestamp with time zone NOT NULL,
    CONSTRAINT complaint_category_staff_mapping_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.complaint_category_staff_mapping
    OWNER to postgres;

-- Table: public.complaint_keyword_staff_mapping

CREATE TABLE public.complaint_keyword_staff_mapping
(
    id text NOT NULL,
    staff_id text NOT NULL,
    keyword text COLLATE pg_catalog."default" NOT NULL,
    priority integer,
    created timestamp with time zone NOT NULL,
    updated timestamp with time zone NOT NULL,
    CONSTRAINT complaint_keyword_staff_mapping_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.complaint_keyword_staff_mapping
    OWNER to postgres;

-- Table: public.complaint_log

CREATE TABLE public.complaint_log
(
    id text NOT NULL,
    complaint_id text NOT NULL,
    type text COLLATE pg_catalog."default" NOT NULL,
    status_from text COLLATE pg_catalog."default",
    status_to text COLLATE pg_catalog."default",
    assignee_id_from text,
    assignee_id_to text,
    action_student_id text COLLATE pg_catalog."default",
    action_staff_id text,
    action_admin_id text,
    comment text COLLATE pg_catalog."default",
    created timestamp with time zone NOT NULL,
    updated timestamp with time zone NOT NULL,
    CONSTRAINT complaint_log_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.complaint_log
    OWNER to postgres;

-- Table: public.staff

CREATE TABLE public.staff
(
    id text NOT NULL,
    firstname text COLLATE pg_catalog."default" NOT NULL,
    lastname text COLLATE pg_catalog."default" NOT NULL,
    email text COLLATE pg_catalog."default" NOT NULL,
    password text COLLATE pg_catalog."default" NOT NULL,
    created timestamp with time zone NOT NULL,
    updated timestamp with time zone NOT NULL,
    CONSTRAINT staff_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.staff
    OWNER to postgres;


-- Table: public.complaint

CREATE TABLE public.complaint
(
    id text COLLATE pg_catalog."default" NOT NULL,
    category_id text COLLATE pg_catalog."default",
    topic text COLLATE pg_catalog."default",
    content text COLLATE pg_catalog."default",
    owner_id text COLLATE pg_catalog."default",
    incognito boolean,
    severity integer,
    assignee_id text COLLATE pg_catalog."default",
    status text COLLATE pg_catalog."default",
    satisfaction integer,
    created timestamp with time zone NOT NULL,
    updated timestamp with time zone NOT NULL,
    CONSTRAINT complaint_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.complaint
    OWNER to postgres;
