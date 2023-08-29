
-- --------------------------------------------------------

--
-- Table structure for table `Technicians`
--

CREATE TABLE `Technicians` (
  `TechID` int NOT NULL,
  `FirstName` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `LastName` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `Email` varchar(250) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Technicians`
--

INSERT INTO `Technicians` (`TechID`, `FirstName`, `LastName`, `Email`) VALUES
(1, 'Leah', 'Vicente', 'leah.m.vicente@gmail.com');
