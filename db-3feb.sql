-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Värd: 127.0.0.1:3306
-- Tid vid skapande: 14 mars 2023 kl 16:00
-- Serverversion: 10.4.27-MariaDB
-- PHP-version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databas: `3feb`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `url` text NOT NULL,
  `title` text NOT NULL,
  `text` text NOT NULL,
  `img` text NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumpning av Data i tabell `posts`
--

INSERT INTO `posts` (`id`, `url`, `title`, `text`, `img`, `date`) VALUES
(9, 'nagot-nytt', 'Något nytt', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elit eros, mattis ac ligula eu, venenatis consectetur risus. Nam dictum felis ac lobortis ornare. Sed laoreet egestas risus nec accumsan. Donec auctor purus condimentum, iaculis lorem et, venenatis magna. Nullam eu faucibus nulla, sit amet pretium urna. Vivamus in risus.', '/uploads/1678799200744.jpg', '0000-00-00'),
(10, 'vroom-vroom', 'Vroom Vroom', 'Aenean ac dui velit. Donec pulvinar dignissim aliquam. Proin ultrices turpis vitae feugiat luctus. Curabitur blandit mauris urna, vitae pretium mi lacinia quis. Ut interdum tincidunt semper. Donec condimentum velit at elit lobortis egestas. Nam eu ex quis arcu rhoncus facilisis id vel lacus. Vivamus laoreet velit quis neque pharetra.', '/uploads/1678800279016.jpg', '0000-00-00');

--
-- Index för dumpade tabeller
--

--
-- Index för tabell `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT för dumpade tabeller
--

--
-- AUTO_INCREMENT för tabell `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
