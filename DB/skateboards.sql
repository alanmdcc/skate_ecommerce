
INSERT INTO `impuls8`.`usuario` ( `userName`, `userPhone`, `userEmail`, `password`, `isAdmin`) VALUES ( 'Fulanito', '55055', 'fulanito@gmail.com', 'password', '0');
INSERT INTO `impuls8`.`usuario` ( `userName`, `userPhone`, `userEmail`, `password`, `isAdmin`) VALUES ( 'Manuel Aguirre', '558944', 'maguirre@gmail.com', 'ipn rifa', '0');
INSERT INTO `impuls8`.`usuario` ( `userName`, `userPhone`, `userEmail`, `password`, `isAdmin`) VALUES ( 'Alan Martin del Campo', '558947', 'alandc@gmail.com', 'udeg rifa', '0');
INSERT INTO `impuls8`.`usuario` ( `userName`, `userPhone`, `userEmail`, `password`, `isAdmin`) VALUES ( 'Andres Arellano', '558948', 'andresab@gmail.com', 'ipn rifa', '0');
INSERT INTO `impuls8`.`usuario` ( `userName`, `userPhone`, `userEmail`, `password`, `isAdmin`) VALUES ( 'David Martinez', '558949', 'dmtz@gmail.com', 'uam rifa', '0');

INSERT INTO `impuls8`.`category` (`categoryName`) VALUES ('skateboards');
INSERT INTO `impuls8`.`category` ( `categoryName`) VALUES ('longboards');
INSERT INTO `impuls8`.`category` ( `categoryName`) VALUES ('pennyboards');

INSERT INTO `impuls8`.`product` ( `nameProduct`, `priceProduct`, `descriptionProduct`, `productPicture`, `Category_idCategory`) VALUES ('skatePulpo', '1500', 'patineta con imagen de pulpo', 'url', '2');
INSERT INTO `impuls8`.`product` ( `nameProduct`, `priceProduct`, `descriptionProduct`, `productPicture`, `Category_idCategory`) VALUES ('AlienInvasion', '1600', 'patineta con imagen de alien', 'url', '2');
INSERT INTO `impuls8`.`product` ( `nameProduct`, `priceProduct`, `descriptionProduct`, `productPicture`, `Category_idCategory`) VALUES ('skateGato', '1400', 'patineta con imagen de gato', 'url', '1');
INSERT INTO `impuls8`.`product` ( `nameProduct`, `priceProduct`, `descriptionProduct`, `productPicture`, `Category_idCategory`) VALUES ('orangePennyboard', '1700', 'patineta naranja', 'url', '3');
INSERT INTO `impuls8`.`product` ( `nameProduct`, `priceProduct`, `descriptionProduct`, `productPicture`, `Category_idCategory`) VALUES ('Dark Nightmare', '1800', 'patineta con graficos', 'url', '1');

INSERT INTO `impuls8`.`productcart` (`quantity`, `Usuario_idUser`, `Product_idProduct`) VALUES ('2', '2', '1');
INSERT INTO `impuls8`.`productcart` (`quantity`, `Usuario_idUser`, `Product_idProduct`) VALUES ('1', '1', '2');
INSERT INTO `impuls8`.`productcart` (`quantity`, `Usuario_idUser`, `Product_idProduct`) VALUES ('3', '3', '3');
INSERT INTO `impuls8`.`productcart` (`quantity`, `Usuario_idUser`, `Product_idProduct`) VALUES ('1', '2', '5');
INSERT INTO `impuls8`.`productcart` (`quantity`, `Usuario_idUser`, `Product_idProduct`) VALUES ('2', '3', '4');

INSERT INTO `impuls8`.`userorder` ( `dateUserOrder`, `Usuario_idUser`) VALUES ( '28-03-2022', '1');
INSERT INTO `impuls8`.`userorder` ( `dateUserOrder`, `Usuario_idUser`) VALUES ( '27-03-2022', '3');
INSERT INTO `impuls8`.`userorder` ( `dateUserOrder`, `Usuario_idUser`) VALUES ( '19-02-2022', '2');
INSERT INTO `impuls8`.`userorder` ( `dateUserOrder`, `Usuario_idUser`) VALUES ( '17-05-2022', '4');
INSERT INTO `impuls8`.`userorder` ( `dateUserOrder`, `Usuario_idUser`) VALUES ( '30-01-2022', '2');

INSERT INTO `impuls8`.`orderproductquantity` (`quantity`, `Product_idProduct`, `UserOrder_idUserOrder`) VALUES ('2', '1', '1');
INSERT INTO `impuls8`.`orderproductquantity` (`quantity`, `Product_idProduct`, `UserOrder_idUserOrder`) VALUES ('1', '1', '2');
INSERT INTO `impuls8`.`orderproductquantity` (`quantity`, `Product_idProduct`, `UserOrder_idUserOrder`) VALUES ('3', '3', '3');
INSERT INTO `impuls8`.`orderproductquantity` (`quantity`, `Product_idProduct`, `UserOrder_idUserOrder`) VALUES ('1', '3', '4');
INSERT INTO `impuls8`.`orderproductquantity` (`quantity`, `Product_idProduct`, `UserOrder_idUserOrder`) VALUES ('1', '2', '5');



