
-- --------------------------------------------------------

--
-- Table structure for table `TicketPriorities`
--

CREATE TABLE `TicketPriorities` (
  `PriorityID` int NOT NULL,
  `PriorityName` varchar(25) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `TicketPriorities`
--

INSERT INTO `TicketPriorities` (`PriorityID`, `PriorityName`) VALUES
(1, 'Low'),
(2, 'Medium'),
(3, 'High'),
(4, 'Critical');
