-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema impuls8
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema impuls8
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `impuls8` DEFAULT CHARACTER SET utf8 ;
USE `impuls8` ;

-- -----------------------------------------------------
-- Table `impuls8`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `impuls8`.`User` (
  `idUser` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(45) NOT NULL,
  `userPhone` VARCHAR(45) NOT NULL,
  `userEmail` VARCHAR(45) NOT NULL,
  `password` VARCHAR(256) NOT NULL,
  `isAdmin` TINYINT NOT NULL,
  PRIMARY KEY (`idUser`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `impuls8`.`Category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `impuls8`.`Category` (
  `idCategory` INT NOT NULL AUTO_INCREMENT,
  `categoryName` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idCategory`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `impuls8`.`Product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `impuls8`.`Product` (
  `idProduct` INT NOT NULL AUTO_INCREMENT,
  `nameProduct` VARCHAR(45) NOT NULL,
  `priceProduct` DOUBLE NOT NULL,
  `descriptionProduct` VARCHAR(200) NOT NULL,
  `productPicture` VARCHAR(200) NOT NULL,
  `Category_idCategory` INT NOT NULL,
  PRIMARY KEY (`idProduct`),
  INDEX `fk_Product_Category1_idx` (`Category_idCategory` ASC) VISIBLE,
  CONSTRAINT `fk_Product_Category1`
    FOREIGN KEY (`Category_idCategory`)
    REFERENCES `impuls8`.`Category` (`idCategory`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `impuls8`.`UserOrder`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `impuls8`.`UserOrder` (
  `idUserOrder` INT NOT NULL AUTO_INCREMENT,
  `dateUserOrder` DATETIME NOT NULL,
  `User_idUser` INT NOT NULL,
  PRIMARY KEY (`idUserOrder`),
  INDEX `fk_UserOrder_User1_idx` (`User_idUser` ASC) VISIBLE,
  CONSTRAINT `fk_UserOrder_User1`
    FOREIGN KEY (`User_idUser`)
    REFERENCES `impuls8`.`User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `impuls8`.`OrderProductQuantity`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `impuls8`.`OrderProductQuantity` (
  `quantity` INT NOT NULL,
  `Product_idProduct` INT NOT NULL,
  `UserOrder_idUserOrder` INT NOT NULL,
  PRIMARY KEY (`Product_idProduct`, `UserOrder_idUserOrder`),
  INDEX `fk_ProductQuantity_UserOrder1_idx` (`UserOrder_idUserOrder` ASC) VISIBLE,
  CONSTRAINT `fk_ProductQuantity_Product1`
    FOREIGN KEY (`Product_idProduct`)
    REFERENCES `impuls8`.`Product` (`idProduct`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ProductQuantity_UserOrder1`
    FOREIGN KEY (`UserOrder_idUserOrder`)
    REFERENCES `impuls8`.`UserOrder` (`idUserOrder`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `impuls8`.`ProductCart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `impuls8`.`ProductCart` (
  `quantity` INT NOT NULL,
  `User_idUser` INT NOT NULL,
  `Product_idProduct` INT NOT NULL,
  PRIMARY KEY (`User_idUser`, `Product_idProduct`),
  INDEX `fk_ProductCart_Product1_idx` (`Product_idProduct` ASC) VISIBLE,
  CONSTRAINT `fk_ProductCart_User1`
    FOREIGN KEY (`User_idUser`)
    REFERENCES `impuls8`.`User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ProductCart_Product1`
    FOREIGN KEY (`Product_idProduct`)
    REFERENCES `impuls8`.`Product` (`idProduct`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
