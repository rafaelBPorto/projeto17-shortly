--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: addVisit(character varying); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public."addVisit"(id character varying) RETURNS void
    LANGUAGE plpgsql SECURITY DEFINER
    AS $$
BEGIN
	START TRANSACTION;
    	SELECT visits FROM urls WHERE id = id FOR UPDATE;
	UPDATE urls SET visits = visits + 1 WHERE id = id;
	COMMIT;
END;
$$;


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    token text NOT NULL
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    url text NOT NULL,
    short_url text NOT NULL,
    visits integer DEFAULT 0 NOT NULL,
    user_id integer NOT NULL,
    create_at timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    email text NOT NULL,
    password text NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (1, 1, '78211e24-2e9f-434e-87ef-67e4871fd201');
INSERT INTO public.sessions VALUES (2, 1, '518ab2ad-9cda-4418-89a7-0e6ad6b6b9d8');
INSERT INTO public.sessions VALUES (3, 1, '15961151-00dc-4ba0-9fe3-9193fb91237d');
INSERT INTO public.sessions VALUES (4, 1, '1b98c230-3aec-4ed3-9bfc-5c3100cde632');
INSERT INTO public.sessions VALUES (5, 1, '0570b4c7-a2c2-4bb2-885e-700f2ab1f37f');
INSERT INTO public.sessions VALUES (6, 1, 'b4ec8ced-6a0c-4ea9-b022-9ddc88b942be');
INSERT INTO public.sessions VALUES (7, 1, 'a43a7fcc-3a47-454d-a96f-c85e82c1a0f7');
INSERT INTO public.sessions VALUES (8, 1, '95be21cd-6576-402c-a3ce-55b91804239f');
INSERT INTO public.sessions VALUES (9, 1, '39c8a2af-dc78-43aa-b518-a17b38bf62b7');
INSERT INTO public.sessions VALUES (10, 1, 'e09d0d71-bfbe-40b8-bd74-b0d488deba60');
INSERT INTO public.sessions VALUES (11, 1, 'ac7fe80c-45ba-4e33-8825-c15aa6b9bc1b');
INSERT INTO public.sessions VALUES (12, 2, '53a4f04c-0e7d-4d8d-bf5a-993a56fc62f9');


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.urls VALUES (13, 'aaa', 'a1gX9fa1HN', 0, 1, '2022-12-23 11:01:49.308397');
INSERT INTO public.urls VALUES (14, 'aaa', 'kcBBnpvYDU', 0, 1, '2022-12-23 11:01:53.374294');
INSERT INTO public.urls VALUES (16, 'https://www.globo.com/', 'kehLqdAgIE', 0, 1, '2022-12-23 13:51:53.687727');
INSERT INTO public.urls VALUES (17, 'https://www.globo.com/', 'yLg3LaZFNF', 3, 1, '2022-12-23 13:51:55.509403');
INSERT INTO public.urls VALUES (18, 'https://www.globo.com/', 'IFmk72XiSw', 0, 1, '2022-12-23 14:15:55.466905');
INSERT INTO public.urls VALUES (19, 'https://www.globo.com/', 'zH9deS2g3V', 0, 1, '2022-12-23 14:45:40.976935');
INSERT INTO public.urls VALUES (20, 'https://www.globo.com/', 'LprqrIuvGT', 0, 1, '2022-12-23 14:46:16.113897');
INSERT INTO public.urls VALUES (21, 'https://www.globo.com/', 'vx6iIp3EtN', 0, 1, '2022-12-23 14:48:40.851858');
INSERT INTO public.urls VALUES (22, 'https://www.globo.com/', 'pHLtthe1ep', 0, 1, '2022-12-23 14:49:40.426571');
INSERT INTO public.urls VALUES (23, 'https://www.globo.com/', '3Uk7-i_FaJ', 0, 1, '2022-12-23 14:50:06.161308');
INSERT INTO public.urls VALUES (25, 'https://www.globo.com/', 'Cb6cFiM4qZ', 0, 2, '2022-12-23 14:50:30.856039');
INSERT INTO public.urls VALUES (15, 'https://www.globo.com/', 'hzamzqdEBs', 3, 1, '2022-12-23 13:48:15.120422');
INSERT INTO public.urls VALUES (24, 'https://www.globo.com/', 'WLaMThOM_J', 3, 1, '2022-12-23 14:50:16.761031');
INSERT INTO public.urls VALUES (26, 'https://www.globo.com/', 'WcUAEcym05', 0, 2, '2022-12-23 16:43:15.249218');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'João', 'joao@driven.com.br', '$2b$10$T/nzshhi.t1n0Yk4327Dh.s2at0aWzgbdsyE/6H315ZJ7gdTL0slu');
INSERT INTO public.users VALUES (2, 'rafael', 'rafael@driven.com.br', '$2b$10$0d/JBmC3lZD2p6/g2VJrWOVx3ROD83PdrTA5PdO3jebwd9rfex6gK');


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 12, true);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 26, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 2, true);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: sessions sections_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sections_fk0 FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

