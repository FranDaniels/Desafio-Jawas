-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: dualiza
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.28-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `componente`
--

DROP TABLE IF EXISTS `componente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `componente` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `tipo` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `componente_id_unique` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `componente`
--

LOCK TABLES `componente` WRITE;
/*!40000 ALTER TABLE `componente` DISABLE KEYS */;
INSERT INTO `componente` VALUES (1,'Unidad Central de Procesamiento','CPU','Es el cerebro del ordenador y realiza la mayoría de las operaciones de procesamiento.','2023-12-12 21:06:47','2023-12-12 21:06:47'),(2,'Memoria de Acceso Aleatorio','RAM','Almacena temporalmente datos y programas en uso para proporcionar acceso rápido a la CPU.','2023-12-12 21:06:47','2023-12-12 21:06:47'),(3,'Almacenamiento','SSD','Ofrece un espacio de almacenamiento permanente para el sistema operativo, aplicaciones y datos.','2023-12-12 21:06:47','2023-12-12 21:06:47'),(4,'Tarjeta Madre','Placa Base','Conecta y facilita la comunicación entre todos los componentes del ordenador.','2023-12-12 21:06:47','2023-12-12 21:06:47'),(5,'Tarjeta de video','GPU','Procesa y genera imágenes para mostrar en el monitor. Es crucial para gráficos intensivos y aplicaciones 3D.','2023-12-12 21:06:47','2023-12-12 21:06:47'),(6,'Pantalla de video','Monitor','\n            El monitor es un componente clave de un sistema de computadora que proporciona una interfaz visual para que los usuarios puedan interactuar con el sistema operativo, las aplicaciones y los datos.','2023-12-12 21:06:47','2023-12-12 21:06:47'),(7,'Disco Duro','HDD','Ofrece un espacio de almacenamiento permanente para el sistema operativo','2023-12-12 21:06:47','2023-12-12 21:06:47');
/*!40000 ALTER TABLE `componente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `componente_lote`
--

DROP TABLE IF EXISTS `componente_lote`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `componente_lote` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `id_componente` bigint(20) unsigned NOT NULL,
  `id_lote` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `componente_lote_id_componente_foreign` (`id_componente`),
  KEY `componente_lote_id_lote_foreign` (`id_lote`),
  CONSTRAINT `componente_lote_id_componente_foreign` FOREIGN KEY (`id_componente`) REFERENCES `componente` (`id`),
  CONSTRAINT `componente_lote_id_lote_foreign` FOREIGN KEY (`id_lote`) REFERENCES `lote` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `componente_lote`
--

LOCK TABLES `componente_lote` WRITE;
/*!40000 ALTER TABLE `componente_lote` DISABLE KEYS */;
INSERT INTO `componente_lote` VALUES (1,1,3,'2023-12-12 21:06:48','2023-12-12 21:06:48');
/*!40000 ALTER TABLE `componente_lote` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `despiece`
--

DROP TABLE IF EXISTS `despiece`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `despiece` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `id_lote` bigint(20) unsigned NOT NULL,
  `id_usuario_clasificador` bigint(20) unsigned NOT NULL,
  `id_componente` bigint(20) unsigned NOT NULL,
  `cantidad` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `despiece_id_lote_foreign` (`id_lote`),
  KEY `despiece_id_usuario_clasificador_foreign` (`id_usuario_clasificador`),
  KEY `despiece_id_componente_foreign` (`id_componente`),
  CONSTRAINT `despiece_id_componente_foreign` FOREIGN KEY (`id_componente`) REFERENCES `componente` (`id`),
  CONSTRAINT `despiece_id_lote_foreign` FOREIGN KEY (`id_lote`) REFERENCES `lote` (`id`),
  CONSTRAINT `despiece_id_usuario_clasificador_foreign` FOREIGN KEY (`id_usuario_clasificador`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `despiece`
--

LOCK TABLES `despiece` WRITE;
/*!40000 ALTER TABLE `despiece` DISABLE KEYS */;
INSERT INTO `despiece` VALUES (1,4,4,7,3,'2023-12-12 21:06:49','2023-12-12 21:06:49');
/*!40000 ALTER TABLE `despiece` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inventario`
--

DROP TABLE IF EXISTS `inventario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inventario` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `id_lote` bigint(20) unsigned NOT NULL,
  `id_componente` bigint(20) unsigned NOT NULL,
  `cantidad_disponible` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `inventario_id_lote_foreign` (`id_lote`),
  KEY `inventario_id_componente_foreign` (`id_componente`),
  CONSTRAINT `inventario_id_componente_foreign` FOREIGN KEY (`id_componente`) REFERENCES `componente` (`id`),
  CONSTRAINT `inventario_id_lote_foreign` FOREIGN KEY (`id_lote`) REFERENCES `lote` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inventario`
--

LOCK TABLES `inventario` WRITE;
/*!40000 ALTER TABLE `inventario` DISABLE KEYS */;
INSERT INTO `inventario` VALUES (1,1,1,10,'2023-12-12 21:06:47','2023-12-12 21:06:47'),(2,5,2,17,'2023-12-12 21:06:47','2023-12-12 21:06:47'),(3,7,4,20,'2023-12-12 21:06:47','2023-12-12 21:06:47');
/*!40000 ALTER TABLE `inventario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `joya`
--

DROP TABLE IF EXISTS `joya`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `joya` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `id_usuario` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `joya_id_unique` (`id`),
  KEY `joya_id_usuario_foreign` (`id_usuario`),
  CONSTRAINT `joya_id_usuario_foreign` FOREIGN KEY (`id_usuario`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `joya`
--

LOCK TABLES `joya` WRITE;
/*!40000 ALTER TABLE `joya` DISABLE KEYS */;
INSERT INTO `joya` VALUES (1,'Pulsera de placa base','Una elegante pulsera de cuero con detalles de placa base.','pulseras_placa_base.jpg',1,'2023-12-12 21:06:47','2023-12-12 21:06:47'),(2,'Pin de placa base','Un delicado pendiente de disco duro y un osito en su centro.','pin_placa_base_rojo.jpg',3,'2023-12-12 21:06:47','2023-12-12 21:06:47'),(3,'Collar Osito','Un hermoso collar con un disco duro y un hermoso osito en su interior','collar_osito.jpg',3,'2023-12-12 21:06:47','2023-12-12 21:06:47');
/*!40000 ALTER TABLE `joya` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `joya_receta`
--

DROP TABLE IF EXISTS `joya_receta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `joya_receta` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `id_joya` bigint(20) unsigned NOT NULL,
  `id_receta` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `joya_receta_id_joya_foreign` (`id_joya`),
  KEY `joya_receta_id_receta_foreign` (`id_receta`),
  CONSTRAINT `joya_receta_id_joya_foreign` FOREIGN KEY (`id_joya`) REFERENCES `joya` (`id`),
  CONSTRAINT `joya_receta_id_receta_foreign` FOREIGN KEY (`id_receta`) REFERENCES `receta` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `joya_receta`
--

LOCK TABLES `joya_receta` WRITE;
/*!40000 ALTER TABLE `joya_receta` DISABLE KEYS */;
INSERT INTO `joya_receta` VALUES (1,1,3,'2023-12-12 21:06:48','2023-12-12 21:06:48');
/*!40000 ALTER TABLE `joya_receta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lote`
--

DROP TABLE IF EXISTS `lote`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lote` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) NOT NULL,
  `latitud` varchar(255) NOT NULL,
  `longitud` varchar(255) NOT NULL,
  `estado` varchar(255) NOT NULL,
  `fecha_entrega` datetime NOT NULL,
  `disponible` tinyint(1) NOT NULL,
  `clasificado` tinyint(1) NOT NULL,
  `id_usuario` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `lote_id_unique` (`id`),
  KEY `lote_id_usuario_foreign` (`id_usuario`),
  CONSTRAINT `lote_id_usuario_foreign` FOREIGN KEY (`id_usuario`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lote`
--

LOCK TABLES `lote` WRITE;
/*!40000 ALTER TABLE `lote` DISABLE KEYS */;
INSERT INTO `lote` VALUES (1,'Lote 1','38.69296294925023','-4.1086506843566895','Entregado','2023-12-01 12:01:27',1,0,3,'2023-12-12 21:06:46','2023-12-12 21:06:46'),(2,'Lote 2','38.69296294925023','-4.1086506843566895','Entregado','2023-12-01 12:01:27',0,0,4,'2023-12-12 21:06:46','2023-12-12 21:06:46'),(3,'Lote 3','38.69296294925023','-4.1086506843566895','Entregado','2023-12-01 12:01:27',0,0,1,'2023-12-12 21:06:46','2023-12-12 21:06:46'),(4,'Lote 4','38.69296294925023','-4.1086506843566895','En camino','2023-12-01 12:01:27',0,0,2,'2023-12-12 21:06:46','2023-12-12 21:06:46'),(5,'Lote 5','38.69296294925023','-4.1086506843566895','En camino','2023-12-01 12:01:27',0,0,2,'2023-12-12 21:06:46','2023-12-12 21:06:46'),(6,'Lote 6','38.69296294925023','-4.1086506843566895','Entregado','2023-12-01 12:01:27',1,0,2,'2023-12-12 21:06:46','2023-12-12 21:06:46'),(7,'Lote 7','38.69296294925023','-4.1086506843566895','En camino','2023-12-01 12:01:27',0,0,2,'2023-12-12 21:06:46','2023-12-12 21:06:46'),(8,'Lote 8','38.69296294925023','-4.1086506843566895','Entregado','2023-12-01 12:01:27',1,0,2,'2023-12-12 21:06:46','2023-12-12 21:06:46'),(9,'Lote 9','38.69296294925023','-4.1086506843566895','En camino','2023-12-01 12:01:27',0,0,2,'2023-12-12 21:06:46','2023-12-12 21:06:46'),(10,'Lote 10','38.69296294925023','-4.1086506843566895','Entregado','2023-12-01 12:01:27',1,0,3,'2023-12-12 21:06:46','2023-12-12 21:06:46'),(11,'Lote 11','38.69296294925023','-4.1086506843566895','En camino','2023-12-01 12:01:27',0,0,3,'2023-12-12 21:06:46','2023-12-12 21:06:46'),(12,'Lote 12','38.69296294925023','-4.1086506843566895','Entregado','2023-12-01 12:01:27',1,0,3,'2023-12-12 21:06:46','2023-12-12 21:06:46'),(13,'Lote 13','38.69296294925023','-4.1086506843566895','Entregado','2023-12-01 12:01:27',1,0,3,'2023-12-12 21:06:46','2023-12-12 21:06:46');
/*!40000 ALTER TABLE `lote` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lote_usuario`
--

DROP TABLE IF EXISTS `lote_usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lote_usuario` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `id_usuario` bigint(20) unsigned NOT NULL,
  `id_lote` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `lote_usuario_id_unique` (`id`),
  KEY `lote_usuario_id_usuario_foreign` (`id_usuario`),
  KEY `lote_usuario_id_lote_foreign` (`id_lote`),
  CONSTRAINT `lote_usuario_id_lote_foreign` FOREIGN KEY (`id_lote`) REFERENCES `lote` (`id`),
  CONSTRAINT `lote_usuario_id_usuario_foreign` FOREIGN KEY (`id_usuario`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lote_usuario`
--

LOCK TABLES `lote_usuario` WRITE;
/*!40000 ALTER TABLE `lote_usuario` DISABLE KEYS */;
INSERT INTO `lote_usuario` VALUES (1,1,3,'2023-12-12 21:06:46','2023-12-12 21:06:46'),(2,2,2,'2023-12-12 21:06:46','2023-12-12 21:06:46');
/*!40000 ALTER TABLE `lote_usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=460 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (445,'2013_11_19_145814_create_rol_table',1),(446,'2014_10_12_000000_create_users_table',1),(447,'2014_10_12_100000_create_password_reset_tokens_table',1),(448,'2019_08_19_000000_create_failed_jobs_table',1),(449,'2019_12_14_000001_create_personal_access_tokens_table',1),(450,'2023_11_19_145912_create_rol_usuario_table',1),(451,'2023_11_19_145947_create_joya_table',1),(452,'2023_11_19_150020_create_componente_table',1),(453,'2023_11_19_150023_create_receta_table',1),(454,'2023_11_19_150114_create_lote_table',1),(455,'2023_11_19_150140_create_despiece_table',1),(456,'2023_11_19_150305_create_inventario_table',1),(457,'2023_12_01_114452_create_lote_usuario',1),(458,'2023_12_05_161530_create_table_componente_lote',1),(459,'2023_12_05_161550_create_table_joya_receta',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_reset_tokens`
--

LOCK TABLES `password_reset_tokens` WRITE;
/*!40000 ALTER TABLE `password_reset_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_reset_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `receta`
--

DROP TABLE IF EXISTS `receta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `receta` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `id_joya` bigint(20) unsigned NOT NULL,
  `id_componente` bigint(20) unsigned NOT NULL,
  `cantidad` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `receta_id_unique` (`id`),
  KEY `receta_id_joya_foreign` (`id_joya`),
  KEY `receta_id_componente_foreign` (`id_componente`),
  CONSTRAINT `receta_id_componente_foreign` FOREIGN KEY (`id_componente`) REFERENCES `componente` (`id`),
  CONSTRAINT `receta_id_joya_foreign` FOREIGN KEY (`id_joya`) REFERENCES `joya` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `receta`
--

LOCK TABLES `receta` WRITE;
/*!40000 ALTER TABLE `receta` DISABLE KEYS */;
INSERT INTO `receta` VALUES (1,1,1,3,'2023-12-12 21:06:48','2023-12-12 21:06:48'),(2,2,2,2,'2023-12-12 21:06:48','2023-12-12 21:06:48'),(3,3,4,5,'2023-12-12 21:06:48','2023-12-12 21:06:48');
/*!40000 ALTER TABLE `receta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rol`
--

DROP TABLE IF EXISTS `rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rol` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `rol_id_unique` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol`
--

LOCK TABLES `rol` WRITE;
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
INSERT INTO `rol` VALUES (1,'Administrador','2023-12-12 21:06:44','2023-12-12 21:06:44'),(2,'Colaborador','2023-12-12 21:06:44','2023-12-12 21:06:44'),(3,'Diseñador','2023-12-12 21:06:44','2023-12-12 21:06:44'),(4,'Clasificador','2023-12-12 21:06:44','2023-12-12 21:06:44');
/*!40000 ALTER TABLE `rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rol_usuario`
--

DROP TABLE IF EXISTS `rol_usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rol_usuario` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `id_rol` bigint(20) unsigned NOT NULL,
  `id_usuario` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `rol_usuario_id_unique` (`id`),
  KEY `rol_usuario_id_rol_foreign` (`id_rol`),
  KEY `rol_usuario_id_usuario_foreign` (`id_usuario`),
  CONSTRAINT `rol_usuario_id_rol_foreign` FOREIGN KEY (`id_rol`) REFERENCES `rol` (`id`),
  CONSTRAINT `rol_usuario_id_usuario_foreign` FOREIGN KEY (`id_usuario`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol_usuario`
--

LOCK TABLES `rol_usuario` WRITE;
/*!40000 ALTER TABLE `rol_usuario` DISABLE KEYS */;
INSERT INTO `rol_usuario` VALUES (1,1,1,'2023-12-12 21:06:46','2023-12-12 21:06:46'),(2,2,1,'2023-12-12 21:06:46','2023-12-12 21:06:46'),(3,3,1,'2023-12-12 21:06:46','2023-12-12 21:06:46'),(4,4,1,'2023-12-12 21:06:46','2023-12-12 21:06:46'),(5,3,2,'2023-12-12 21:06:46','2023-12-12 21:06:46'),(6,4,2,'2023-12-12 21:06:46','2023-12-12 21:06:46'),(7,2,3,'2023-12-12 21:06:46','2023-12-12 21:06:46'),(8,4,3,'2023-12-12 21:06:46','2023-12-12 21:06:46');
/*!40000 ALTER TABLE `rol_usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `id_rol` bigint(20) unsigned NOT NULL,
  `usuarioActivo` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_correo_unique` (`correo`),
  KEY `users_id_rol_foreign` (`id_rol`),
  CONSTRAINT `users_id_rol_foreign` FOREIGN KEY (`id_rol`) REFERENCES `rol` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Francisco','Alvarez','francisco@gmail.com',NULL,'$2y$12$7Zr.Q5Akz9Qk2Yt9wHTzpeARYSXXsFBJRFBlh07YyVbuiEYxtQIZe','https://proyectodualiza.s3.amazonaws.com/perfiles/obiwanKenobi.jpeg',NULL,1,1,'2023-12-12 21:06:45','2023-12-12 21:06:45'),(2,'Marina','Laguna','marina@gmail.com',NULL,'$2y$12$KsMCY6DZiaB3vVVT.y/RpuTkpFUBocoYe39yen29/AgL07CWTBxUu','https://proyectodualiza.s3.amazonaws.com/perfiles/obiwanKenobi.jpeg',NULL,2,1,'2023-12-12 21:06:45','2023-12-12 21:06:45'),(3,'Badr','Hamidou','badrhamidou@gmail.com',NULL,'$2y$12$huLQT/1AhCng6EvFiBT3VOPyAHtjbOy8RD9mYFyZpoXqR/6tBUf82','https://proyectodualiza.s3.amazonaws.com/perfiles/obiwanKenobi.jpeg',NULL,3,1,'2023-12-12 21:06:45','2023-12-12 21:06:45'),(4,'Ines','Barrera','nessi@gmail.com',NULL,'$2y$12$YZGBgBdWHeYGXtXpTW.rHeSxAt5HLNCSWbzmNc1lDCbdBN4VX/6Y.','https://proyectodualiza.s3.amazonaws.com/perfiles/obiwanKenobi.jpeg',NULL,4,1,'2023-12-12 21:06:45','2023-12-12 21:06:45');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-12 23:07:58
