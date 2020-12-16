CREATE TABLE `customer` (
  `user_id` INT(11) NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `zip` VARCHAR(45) NULL,
  `city` VARCHAR(45) NULL,
  `state` VARCHAR(45) NULL,
  PRIMARY KEY (`user_id`));

CREATE TABLE `product` (
  `product_id` INT(11) NOT NULL,
  `product_name` VARCHAR(45) NULL,
  `product_cost` DECIMAL(10,2) NULL,
  PRIMARY KEY (`product_id`));

CREATE TABLE `purchases` (
  `entryNo` INT(11) NOT NULL AUTO_INCREMENT,
  `user_id` INT(11) NULL,
  `transaction_id` INT(11) NULL,
  `product_id` INT(11) NULL,
  `product_qty` INT(11) NULL,
  PRIMARY KEY (`entryNo`));

CREATE TABLE `cartItems` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `productId` INT(11) NOT NULL,
  `productName` VARCHAR(45),
  `productCost` DECIMAL(10,2),
  `quantity` INT(11) NOT NULL,
  `userId` INT(11) NOT NULL,
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT `fk_cartItems_productId` FOREIGN KEY (productId) REFERENCES product(product_id),
  CONSTRAINT tb_uq UNIQUE (productId, userId),
  PRIMARY KEY (`id`));

INSERT INTO `customer` (`username`, `password`, `zip`, `city`, `state`) VALUES
('jack', 'jack_password', '92128', 'san diego', 'ca'),
('mary', 'mary_password', '92108', 'san diego', 'ca'),
('joe', 'joe_password', '92121', 'san diego', 'ca'),
('becky', 'becky_password', '92126', 'san diego', 'ca');

INSERT INTO `product` (`product_id`, `product_name`, `product_cost`) VALUES
(1, 'ASSASSINS CREED VALHALLA', 59.99),
(2, 'MADDEN 21', 69.99),
(3, 'FIFA 21', 99.99),
(4, 'CALL OF DUTY BLACK OPS', 59.99),
(5, 'GHOST', 69.99),
(6, 'MARVEL AVENGERS', 99.99),
(7, 'NBA 2K21', 59.99),
(8, 'SPIDER MAN', 69.99),
(9, 'JEDI FALLEN ORDER', 99.99),
(10, 'GOD OF WAR', 59.99),
(11, 'THE INCREDIBLES', 69.99),
(12, 'SPYRO', 99.99);

INSERT INTO `purchases` (`user_id`, `transaction_id`, `product_id`, `product_qty`) VALUES
(1, 1, 1, 3),
(1, 1, 2, 3),
(2, 2, 3, 1),
(3, 3, 5, 2),
(4, 1, 7, 2),
(4, 2, 10, 1);

