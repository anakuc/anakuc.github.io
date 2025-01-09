-- MySQL dump 10.13  Distrib 8.3.0, for macos14.2 (arm64)
--
-- Host: 127.0.0.1    Database: G00439362
-- ------------------------------------------------------
-- Server version	8.4.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `productData`
--

DROP TABLE IF EXISTS `productData`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productData` (
  `Product_ID` int NOT NULL,
  `Product_Name` varchar(255) DEFAULT NULL,
  `Product_Description` text,
  `Company_Name` varchar(45) DEFAULT NULL,
  `Category` varchar(45) DEFAULT NULL,
  `Original_Price` varchar(45) DEFAULT NULL,
  `Price` varchar(45) DEFAULT NULL,
  `Location` varchar(45) DEFAULT NULL,
  `Product_Image` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Product_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productData`
--

LOCK TABLES `productData` WRITE;
/*!40000 ALTER TABLE `productData` DISABLE KEYS */;
INSERT INTO `productData` VALUES (1,'Three Course Meal for Two at Royal Spice','Looking to spice up your dining experience? Royal Spice offers a menu inspired by authentic Indian cuisine, prepared with a blend of traditional spices and flavors. Discover a culinary adventure just a stone\'s throw away from Millennium Park. What\'s included: Three courses each, with a choice of Starters, Mains, and Desserts.','Royal Spice','Food & Drink','60.00','30.00','Dublin','images/Indian-food.png'),(2,'Horseriding Lesson','Indulge in a one hour private horse riding lesson with our highly trained instructors and work on your riding techniques. What\'s included: One hour private horseriding lesson.','Wicklow Equitors','Things To Do','65.00','45.00','Glenealy','images/horse-riding.png'),(3,'Full Head Colour with Cut and Blow-Dry','Indulge in a vibrant transformation with our exclusive Full Head Colour package, complete with a precision Cut and professional Blow-Dry. Elevate your style and express your individuality with a stunning array of color options, expertly applied to achieve your desired look. Whether you\'re seeking a bold change or a subtle enhancement, our skilled stylists are dedicated to delivering impeccable results tailored to your unique preferences. Treat yourself to a rejuvenating salon experience and unleash your inner confidence with this all-inclusive package, designed to leave you feeling refreshed, revitalized, and ready to conquer the day. What\'s included: Full Head Colour with Cut and Blow-Dry. Please note, hair over shoulder length will incur an extra charge of €10 that needs to be paid at reception.','Trendy Hair','Beauty & Spas','115.00','89.00','Galway','images/hairdresser.png'),(4,'Double Room with Breakfast for Two in Ibiza','Indulge in a serene escape for two at the picturesque Blue Sea Hotel in Ibiza with our exclusive Double Room with Breakfast offer. Immerse yourselves in the laid-back ambiance of our charming double room, complete with modern amenities and cozy furnishings, ensuring a comfortable and relaxing stay. Wake up to the gentle sound of the waves and start your day on a delightful note with a complimentary breakfast spread, featuring an array of delectable options to satisfy your cravings. Whether you\'re lounging by the pool, exploring the island\'s stunning beaches, or savoring the vibrant nightlife, our hotel serves as the perfect home base for your Ibiza adventure. Unwind in style and create unforgettable memories together amidst the breathtaking beauty of Ibiza. Experience the ultimate romantic getaway at the Blue Sea Hotel, where every moment is designed to enchant and delight. What\'s included: Stay in a double room for 2 people for 1 night with breakfast.','Blue Sea','Hotels & Travel','167.00','120.00','Ibiza','images/hotel.png'),(5,'8 Week Yoga and Mindfulness Classes','Experience the transformative power of yoga and mindfulness. Join our class to unwind, de-stress, and rejuvenate your mind, body, and soul. Embrace a journey of self-discovery and inner peace. Book your session now and embark on a path to holistic well-being. What\'s included: 8 weeks of Yoga and Mindfulness Classes at our studio Mind & Body.','Mind & Body','Things To Do','90.00','50.00','Cork','images/yoga-class.png'),(6,'Wild Ireland: Hotel Stay and Activities','Embark on a thrilling journey through the rugged landscapes of Wild Ireland with our enticing Hotel Stay and Activities package at Adventure Ireland. Nestled amidst the untamed beauty of the Irish countryside, Adventure Ireland offers an unparalleled escape for adventurers and nature enthusiasts alike. Immerse yourself in the tranquility of our charming hotel accommodations, where comfort meets wilderness, providing the perfect retreat after a day of exploration. Awaken your senses with a variety of exhilarating activities, from hiking through ancient forests and kayaking along pristine rivers to discovering hidden gems in quaint villages. With each adventure, you\'ll uncover the rich tapestry of Ireland\'s natural wonders and cultural heritage, creating memories to last a lifetime. Whether you seek heart-pounding thrills or serene moments of reflection, Adventure Ireland promises an unforgettable experience tailored to your desires. What\'s included: Two night hotel stay and activities such as hiking, surfing, paddle boarding. Activities will depend on the weather.','Adventure Ireland','Hotels & Travel','420.00','380.00','Donegal','images/active-holiday.png'),(7,'MoLI – Museum of Literature Ireland: Entry for Two Adults or Family of Six ','Step into the fascinating world of Irish literature at MoLi museum in Dublin. Immerse yourself in the rich literary history and culture of Ireland as you explore our captivating exhibits and interactive displays. From iconic authors to hidden gems, MoLi invites you on a journey through the pages of Irish literature. Join us for an unforgettable experience and unlock the magic of storytelling. What’s included: One (1) family ticket or two (2) adult tickets to visit the Museum of Literature Ireland\n.Family ticket is valid for two adults and up to four children.','MoLI','Things To Do','17.00','10.00','Dublin','images/museum.png');
/*!40000 ALTER TABLE `productData` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subscribers`
--

DROP TABLE IF EXISTS `subscribers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subscribers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subscribers`
--

LOCK TABLES `subscribers` WRITE;
/*!40000 ALTER TABLE `subscribers` DISABLE KEYS */;
INSERT INTO `subscribers` VALUES (65,'sampleuser@mail.com'),(66,'sampleuser2@mail.com');
/*!40000 ALTER TABLE `subscribers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-20  0:12:51
