
-- --------------------------------------------------------

--
-- Table structure for table `AllTickets`
--

CREATE TABLE `AllTickets` (
  `ID` int NOT NULL,
  `Title` varchar(120) COLLATE utf8mb4_general_ci NOT NULL,
  `Description` varchar(500) COLLATE utf8mb4_general_ci NOT NULL,
  `CreatedBy` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `AssignedTo` int NOT NULL,
  `CreatedDate` date NOT NULL,
  `DueDate` date NOT NULL,
  `Status` int NOT NULL,
  `Priority` int NOT NULL,
  `Category` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `AllTickets`
--

INSERT INTO `AllTickets` (`ID`, `Title`, `Description`, `CreatedBy`, `AssignedTo`, `CreatedDate`, `DueDate`, `Status`, `Priority`, `Category`) VALUES
(1, 'This is a test ticket', 'This ticket is being tested. We are making sure this showing up correctly and can be adjusted as needed.', 'test@email.com', 1, '2023-04-03', '2023-04-03', 1, 1, 1);
