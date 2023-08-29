
-- --------------------------------------------------------

--
-- Table structure for table `TicketCategories`
--

CREATE TABLE `TicketCategories` (
  `CategoryID` int NOT NULL,
  `CategoryName` varchar(250) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `TicketCategories`
--

INSERT INTO `TicketCategories` (`CategoryID`, `CategoryName`) VALUES
(1, 'General');
