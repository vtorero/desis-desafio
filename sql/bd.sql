CREATE DATABASE desafio


CREATE TABLE productos (
  id varchar(15) NOT NULL,
  nombre varchar(50) NOT NULL,
  bodega int NOT NULL,
  sucursal int NOT NULL,
  moneda int NOT NULL,
  precio float NOT NULL,
  materiales varchar(50) NOT NULL,
  descripcion text NOT NULL,
  PRIMARY KEY (id)
)

CREATE TABLE bodegas (
  id SERIAL,
  nombre VARCHAR(45) NULL,
  PRIMARY KEY (id))


INSERT INTO bodegas (id,nombre) VALUES
(1,'Bodega 1'),
(2,'Bodega 2'),
(3,'Bodega 3')



CREATE TABLE moneda (
 idmoneda INT NOT NULL,
  nombre VARCHAR(45) NOT NULL,
  PRIMARY KEY (idmoneda));

INSERT INTO monedas (nombre) VALUES
('Pesos'),
('Soles'),
('Dolares')


CREATE TABLE sucursales (
  id int NOT NULL,
  nombre varchar(45) NOT NULL,
  idbodega int DEFAULT NOT NULL,
  PRIMARY KEY (id),
   CONSTRAINT FK_BODEGA FOREIGN KEY (id) REFERENCES bodegas (id)
)

INSERT INTO sucursales (id, nombre, idbodega) VALUES
(1, 'Sucursal A', 1),
(2, 'Sucursal B', 1),
(3, 'Sucursal C', 1),
(4, 'Sucursal D', 2),
(5, 'Sucursal E', 2),
(6, 'Sucursal F', 2),
(7, 'Sucursal G', 3),
(8, 'Sucursal H', 3),
(9, 'Sucursal I', 3),
(10, 'Sucursal J', 3);