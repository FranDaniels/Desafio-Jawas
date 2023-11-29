-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-11-2023 a las 22:42:58
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dualiza`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `componente`
--

CREATE TABLE `componente` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `tipo` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `componente`
--

INSERT INTO `componente` (`id`, `nombre`, `tipo`, `descripcion`, `created_at`, `updated_at`) VALUES
(1, 'Prueba 1', 'CPU', 'Esto es la primera prueba', '2023-11-28 11:25:47', '2023-11-28 11:25:47'),
(2, 'Prueba 1', 'CPU', 'Esto es la primera prueba', '2023-11-28 11:25:56', '2023-11-28 11:25:56');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `despiece`
--

CREATE TABLE `despiece` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_lote` bigint(20) UNSIGNED NOT NULL,
  `id_usuario_clasificador` bigint(20) UNSIGNED NOT NULL,
  `id_componente` bigint(20) UNSIGNED NOT NULL,
  `cantidad` int(11) NOT NULL,
  `descripcion` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inventario`
--

CREATE TABLE `inventario` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_usuario` bigint(20) UNSIGNED NOT NULL,
  `id_componente` bigint(20) UNSIGNED NOT NULL,
  `cantidad_disponible` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `inventario`
--

INSERT INTO `inventario` (`id`, `id_usuario`, `id_componente`, `cantidad_disponible`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 5, '2023-11-28 18:21:36', '2023-11-28 18:21:36');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `joya`
--

CREATE TABLE `joya` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  `id_usuario` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lote`
--

CREATE TABLE `lote` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `ubicacion` varchar(255) NOT NULL,
  `estado` varchar(255) NOT NULL,
  `fecha_entrega` datetime NOT NULL,
  `id_usuario` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `lote`
--

INSERT INTO `lote` (`id`, `descripcion`, `ubicacion`, `estado`, `fecha_entrega`, `id_usuario`, `created_at`, `updated_at`) VALUES
(1, 'Primera prueba', 'Mi casa', 'En camino', '2023-11-28 09:59:52', 1, '2023-11-28 09:02:20', '2023-11-28 09:02:20'),
(4, 'Sgunda prueba', 'Casa de badr', 'En camino', '2023-11-28 09:59:52', 1, '2023-11-28 10:00:11', '2023-11-28 10:00:11'),
(5, 'Primera prueba', 'Mi casa', 'En camino', '2023-11-28 09:59:52', 1, '2023-11-29 08:28:09', '2023-11-29 08:28:09'),
(6, 'Primera prueba', 'Mi casa', 'En camino', '2023-11-29 15:35:00', 1, '2023-11-29 08:30:04', '2023-11-29 08:30:04'),
(7, 'Primera prueba', 'Mi casa', 'En camino', '2023-11-29 15:35:00', 1, '2023-11-29 08:30:08', '2023-11-29 08:30:08'),
(8, 'Hola soy fran', 'Mi casa', 'En tienda', '2023-11-25 16:43:00', 1, '2023-11-29 08:38:21', '2023-11-29 08:38:21'),
(9, 'Prueba 2', 'Mi casa', 'En tienda', '2023-11-29 17:30:00', 1, '2023-11-29 12:25:48', '2023-11-29 12:25:48'),
(10, 'Hola Prueba 3', 'Mi casa', 'En camino', '2023-11-18 23:51:00', 1, '2023-11-29 17:47:11', '2023-11-29 17:47:11');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(61, '2013_11_19_145814_create_rol_table', 1),
(62, '2014_10_12_000000_create_users_table', 1),
(63, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(64, '2019_08_19_000000_create_failed_jobs_table', 1),
(65, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(66, '2023_11_19_145912_create_rol_usuario_table', 1),
(67, '2023_11_19_145947_create_joya_table', 1),
(68, '2023_11_19_150020_create_componente_table', 1),
(69, '2023_11_19_150023_create_receta_table', 1),
(70, '2023_11_19_150114_create_lote_table', 1),
(71, '2023_11_19_150140_create_despiece_table', 1),
(72, '2023_11_19_150305_create_inventario_table', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `receta`
--

CREATE TABLE `receta` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_joya` bigint(20) UNSIGNED NOT NULL,
  `id_componente` bigint(20) UNSIGNED NOT NULL,
  `cantidad` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`id`, `nombre`, `created_at`, `updated_at`) VALUES
(1, 'Administrador', '2023-11-28 08:59:52', '2023-11-28 08:59:52'),
(2, 'Colaborador', '2023-11-28 09:00:04', '2023-11-28 09:00:04'),
(3, 'Diseñador', NULL, NULL),
(4, 'Clasificador', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol_usuario`
--

CREATE TABLE `rol_usuario` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_rol` bigint(20) UNSIGNED NOT NULL,
  `id_usuario` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `rol_usuario`
--

INSERT INTO `rol_usuario` (`id`, `id_rol`, `id_usuario`, `created_at`, `updated_at`) VALUES
(1, 1, 1, '2023-11-28 09:00:29', '2023-11-28 09:00:29'),
(2, 2, 2, '2023-11-28 10:13:09', '2023-11-28 10:13:09'),
(3, 2, 11, '2023-11-28 10:34:15', '2023-11-28 10:34:15'),
(4, 2, 28, '2023-11-28 10:43:06', '2023-11-28 10:43:06'),
(5, 2, 29, '2023-11-29 06:47:07', '2023-11-29 06:47:07'),
(6, 2, 30, '2023-11-29 06:48:08', '2023-11-29 06:48:08'),
(7, 2, 31, '2023-11-29 06:50:28', '2023-11-29 06:50:28'),
(8, 2, 32, '2023-11-29 06:51:15', '2023-11-29 06:51:15'),
(9, 2, 33, '2023-11-29 06:51:59', '2023-11-29 06:51:59'),
(10, 2, 34, '2023-11-29 11:52:30', '2023-11-29 11:52:30');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `id_rol` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `nombre`, `apellido`, `correo`, `email_verified_at`, `password`, `remember_token`, `id_rol`, `created_at`, `updated_at`) VALUES
(1, 'Ines', 'Barrera', 'ines@gmail.com', NULL, '$2y$12$cpIZIlaAmXKmwY4fO9y5dOSVYRMwRYR8mjOQkitFpqD0mAWxPir1y', NULL, 1, '2023-11-28 09:00:29', '2023-11-28 09:00:29'),
(2, 'Francisco', 'Alvarez', 'alvarezbellonfrancisco@gmail.com', NULL, '$2y$12$oBpl8rdzs67fVbM6RWrE4OeUzqPh4kYT3PWHRNndIJs5riCQDCEwG', NULL, 2, '2023-11-28 10:13:09', '2023-11-28 10:13:09'),
(11, 'Ines', 'Barrera', 'nessi@gmail.com', NULL, '$2y$12$L0zKM4GaOsqsIr.vCVlYDOsSSJbmO2Vi9ni3VqMPjgz8iIaAhI60q', NULL, 2, '2023-11-28 10:34:15', '2023-11-28 10:34:15'),
(28, 'Badr', 'Hamidou', 'badrhamidou@gmail.com', NULL, '$2y$12$ci2r3GuBGiNjzCKNeLcDmuAVq654CWh.ZZkniMkAxVkCTV.Fy9QQO', NULL, 2, '2023-11-28 10:43:06', '2023-11-28 10:43:06'),
(29, 'Francisco', 'Fernandez', 'asd@tumadre.com', NULL, '$2y$12$P9sP9p4ByGHQsKrZ8fAXNe6y/2sUCQrrdXdxrM1u/2ksL2dU5Skda', NULL, 2, '2023-11-29 06:47:07', '2023-11-29 06:47:07'),
(30, 'Pilar', 'Izquierda', 'pilar@gmail.com', NULL, '$2y$12$dY2FgQpBKNcUAawj4omyF..UHTu7eEwDVXBiykWGiNdXyrgJ7lrDi', NULL, 2, '2023-11-29 06:48:08', '2023-11-29 06:48:08'),
(31, 'Jose', 'Jimeno', 'jimenofugy@gmail.com', NULL, '$2y$12$CHPhNUATmbtg02QV8Bte8OtMD0eAja8L4ZKPZKOrZ4USXqBakIGaS', NULL, 2, '2023-11-29 06:50:28', '2023-11-29 06:50:28'),
(32, 'Jesus', 'Navas', 'jesus10nt@gmail.com', NULL, '$2y$12$jt9zThEI5KnOTIgTGz5xXOExBkTu.3bXxTzkc3VkRkc.lsNfPcSW.', NULL, 2, '2023-11-29 06:51:15', '2023-11-29 06:51:15'),
(33, 'Francisco', 'Alvarez', '42@gmail.com', NULL, '$2y$12$STffpKeQJlfz6Vm1JWVGr.L4jENO.VlpPlblW3jmeE7fwQjZOau7W', NULL, 2, '2023-11-29 06:51:59', '2023-11-29 06:51:59'),
(34, 'Francisco', 'Alvarez', 'francisco@gmail.com', NULL, '$2y$12$h4FkM09KLm1QwV/L3orAAupudHktwffcRkwlQ0m/ursBy4bhAhza6', NULL, 2, '2023-11-29 11:52:30', '2023-11-29 11:52:30');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `componente`
--
ALTER TABLE `componente`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `componente_id_unique` (`id`);

--
-- Indices de la tabla `despiece`
--
ALTER TABLE `despiece`
  ADD PRIMARY KEY (`id`),
  ADD KEY `despiece_id_lote_foreign` (`id_lote`),
  ADD KEY `despiece_id_usuario_clasificador_foreign` (`id_usuario_clasificador`),
  ADD KEY `despiece_id_componente_foreign` (`id_componente`);

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indices de la tabla `inventario`
--
ALTER TABLE `inventario`
  ADD PRIMARY KEY (`id`),
  ADD KEY `inventario_id_usuario_foreign` (`id_usuario`),
  ADD KEY `inventario_id_componente_foreign` (`id_componente`);

--
-- Indices de la tabla `joya`
--
ALTER TABLE `joya`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `joya_id_unique` (`id`),
  ADD KEY `joya_id_usuario_foreign` (`id_usuario`);

--
-- Indices de la tabla `lote`
--
ALTER TABLE `lote`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `lote_id_unique` (`id`),
  ADD KEY `lote_id_usuario_foreign` (`id_usuario`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indices de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indices de la tabla `receta`
--
ALTER TABLE `receta`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `receta_id_unique` (`id`),
  ADD KEY `receta_id_joya_foreign` (`id_joya`),
  ADD KEY `receta_id_componente_foreign` (`id_componente`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `rol_id_unique` (`id`);

--
-- Indices de la tabla `rol_usuario`
--
ALTER TABLE `rol_usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `rol_usuario_id_unique` (`id`),
  ADD KEY `rol_usuario_id_rol_foreign` (`id_rol`),
  ADD KEY `rol_usuario_id_usuario_foreign` (`id_usuario`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_correo_unique` (`correo`),
  ADD KEY `users_id_rol_foreign` (`id_rol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `componente`
--
ALTER TABLE `componente`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `despiece`
--
ALTER TABLE `despiece`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `inventario`
--
ALTER TABLE `inventario`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `joya`
--
ALTER TABLE `joya`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `lote`
--
ALTER TABLE `lote`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `receta`
--
ALTER TABLE `receta`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `rol_usuario`
--
ALTER TABLE `rol_usuario`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `despiece`
--
ALTER TABLE `despiece`
  ADD CONSTRAINT `despiece_id_componente_foreign` FOREIGN KEY (`id_componente`) REFERENCES `componente` (`id`),
  ADD CONSTRAINT `despiece_id_lote_foreign` FOREIGN KEY (`id_lote`) REFERENCES `lote` (`id`),
  ADD CONSTRAINT `despiece_id_usuario_clasificador_foreign` FOREIGN KEY (`id_usuario_clasificador`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `inventario`
--
ALTER TABLE `inventario`
  ADD CONSTRAINT `inventario_id_componente_foreign` FOREIGN KEY (`id_componente`) REFERENCES `componente` (`id`),
  ADD CONSTRAINT `inventario_id_usuario_foreign` FOREIGN KEY (`id_usuario`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `joya`
--
ALTER TABLE `joya`
  ADD CONSTRAINT `joya_id_usuario_foreign` FOREIGN KEY (`id_usuario`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `lote`
--
ALTER TABLE `lote`
  ADD CONSTRAINT `lote_id_usuario_foreign` FOREIGN KEY (`id_usuario`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `receta`
--
ALTER TABLE `receta`
  ADD CONSTRAINT `receta_id_componente_foreign` FOREIGN KEY (`id_componente`) REFERENCES `componente` (`id`),
  ADD CONSTRAINT `receta_id_joya_foreign` FOREIGN KEY (`id_joya`) REFERENCES `joya` (`id`);

--
-- Filtros para la tabla `rol_usuario`
--
ALTER TABLE `rol_usuario`
  ADD CONSTRAINT `rol_usuario_id_rol_foreign` FOREIGN KEY (`id_rol`) REFERENCES `rol` (`id`),
  ADD CONSTRAINT `rol_usuario_id_usuario_foreign` FOREIGN KEY (`id_usuario`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_id_rol_foreign` FOREIGN KEY (`id_rol`) REFERENCES `rol` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
