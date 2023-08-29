
-- --------------------------------------------------------

--
-- Table structure for table `TicketStatus`
--

CREATE TABLE `TicketStatus` (
  `StatusID` int NOT NULL,
  `StatusName` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `TicketStatus`
--

INSERT INTO `TicketStatus` (`StatusID`, `StatusName`) VALUES
(1, 'Open'),
(2, 'Closed'),
(3, 'Waiting');
