CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;


INSERT INTO `users` (`id`, `name`, `password`) VALUES
(1, 'First User', 'first@Password'),
(2, 'Secound User', 'secound@Password'),
(3, 'Third User', 'third@Password'),
(4, 'Fourth User', 'fourth@Password');

ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);


