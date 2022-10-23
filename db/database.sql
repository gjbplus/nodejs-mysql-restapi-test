CREATE DATABASE IF NOT EXISTS mundialqatar22;

USE mundialqatar22;

-- ok desde heidi sql

CREATE TABLE paises (
	`id` CHAR(3) NOT NULL,
	`name` VARCHAR(45) NULL DEFAULT NULL,
	`continent` VARCHAR(45) NULL DEFAULT NULL,
	`group` CHAR(1) NULL DEFAULT 'x',
	`landmarks` VARCHAR(250) NULL DEFAULT NULL,
	`teamready` TINYINT(1) NULL DEFAULT 0,
    `typedby` VARCHAR(45) NULL DEFAULT '',
	PRIMARY KEY (`id`)
);

COLLATE='utf8mb4_0900_ai_ci';

DESCRIBE paises;

INSERT INTO paises VALUES 
    ('qat', 'Qatar', 'Asia','A', '', 0, ''),
    ('ecu', 'Ecuador', 'América Del Sur','A', '', 0, ''),
    ('sen', 'Senegal', 'Africa','A', '', 0, ''),
    ('ned', 'Holanda', 'Europa','A', 'Segundo en 1974, Segundo en 1978, Segundo en 2010, Tercero en 2014', 0, ''),
    ('eng', 'Inglaterra', 'Europa', 'B', 'Campeón en 1966', 0, '' ),
	('irn', 'Iran', 'Asia', 'B', '', 0, '' ),
	('usa', 'Estados Unidos', 'América Del Norte', 'B', 'Tercero en 1930', 0, '' ),
	('wal', 'Gales', 'Europa', 'B', '', 0, '' ),
	('arg', 'Argentina', 'América del sur', 'C', 'Campeón en 1978, Campeón en 1986, Segundo en 1930, Segundo en 1990, Segundo en 2014', 0, '' ),
	('ksa', 'Arabia Saudita', 'Asia', 'C', '', 0, '' ),
	('mex', 'Mexico', 'América Del Norte', 'C', '', 0, '' ),
	('pol', 'Polonia', 'Europa', 'C', 'Tercero en 1974, Tercero en 1982', 0, '' ),
	('fra', 'Francia', 'Europa', 'D', 'Campeón en 1998, Campeón en 2018, Segundo en 2006, Tercero en 1958, Tercero en 1986', 0, '' ),
	('aus', 'Australia', 'Oceanía', 'D', '', 0, '' ),
	('den', 'Dinamarca', 'Europa', 'D', '', 0, '' ),
	('tun', 'Túnez', 'Africa', 'D', '', 0, '' ),
	('esp', 'España', 'Europa', 'E', 'Campeón en 2010', 0, '' ),
	('crc', 'Costa Rica', 'América Del Norte', 'E', '', 0, '' ),
	('ger', 'Alemania', 'Europa', 'E', 'Campeón en 1958, Campeón en 1974, Campeón en 1990, Campeón en 2014, Segundo en 1966, Segundo en 1982, Segundo en 1986, Tercero en 1934, Tercero en 1970, Tercero en 2006, Tercero en 2010', 0, '' ),
	('jpn', 'Japón', 'Asia', 'E', '', 0, '' ),
	('bel', 'Bélgica', 'Europa', 'F', 'Tercero en 2018', 0, '' ),
	('can', 'Canadá', 'América Del Norte', 'F', '', 0, '' ),
	('mar', 'Marruecos', 'Africa', 'F', '', 0, '' ),
	('cro', 'Croacia', 'Europa', 'F', 'Segundo en 2018, Tercero en 1998', 0, '' ),
	('bra', 'Brasil', 'America del sur', 'G', 'Campeón en 1958, Campeón en 1962, Campeón en 1970, Campeón en 1994, Campeón en 2002, Segundo en 1950, Segundo en 1998, Tercero en 1938, Tercero en 1978', 0, '' ),
	('srb', 'Serbia', 'Europa', 'G', '', 0, '' ),
	('sui', 'Suiza', 'Europa', 'G', '', 0, '' ),
	('cmr', 'Camerun', 'Africa', 'G', '', 0, '' ),
	('por', 'Portugal', 'Europa', 'H', '', 0, '' ),
	('gha', 'Ghana', 'Africa', 'H', '', 0, '' ),
	('uru', 'Uruguay', 'America del sur', 'H', 'Campeón en 1930, Campeón en 1950', 0, '' ),
	('kor', 'Corea Del Sur', 'Asia', 'H', '', 0, '' );




INSERT INTO `paises` (`id`, `name`, `continent`, `group`, `landmarks`,`teamready`,`typedby` ) 
VALUES ('den', 'Croacia', 'Europa', 'E', '', 1, '');


SELECT * FROM paises;

ALTER TABLE `paises`
	ADD COLUMN `typedby` VARCHAR(45) NULL DEFAULT NULL AFTER `teamready`;

ALTER TABLE `paises` CHANGE `continet` `continent` VARCHAR(45);

CREATE TABLE pruebas (
	`id` CHAR(3) NULL DEFAULT NULL,
	`name` VARCHAR(45) NULL DEFAULT NULL,
	`continent` VARCHAR(45) NULL DEFAULT NULL);


INSERT INTO pruebas VALUES 
    ('qat', 'Qatar', 'Asia'),
    ('ecu', 'Ecuador', 'América Del Sur'),
    ('sen', 'Senegal', 'Africa');

	CREATE TABLE figuritas (
	`id` CHAR(5) NOT NULL,
	`idpais` CHAR(3)NOT NULL,
	`namepais` VARCHAR(45) NULL DEFAULT NULL,
	`nameplayer` VARCHAR(41) NULL DEFAULT NULL,
	`latengo` TINYINT(1) NULL DEFAULT 0,
    `esrepetida` TINYINT(1) NULL DEFAULT 0,
	PRIMARY KEY (`id`)
	);

INSERT INTO figuritas VALUES 
    ('ecu1', 'ecu', 'Ecuador','Escudo', 0, 0),
    ('ecu2', 'ecu', 'Ecuador','Jugador 1', 0, 0),
    ('ecu3', 'ecu', 'Ecuador','Jugador 2', 0, 0);