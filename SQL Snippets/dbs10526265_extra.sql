
--
-- Indexes for dumped tables
--

--
-- Indexes for table `AllTickets`
--
ALTER TABLE `AllTickets`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `AssignedTo` (`AssignedTo`),
  ADD KEY `Status` (`Status`),
  ADD KEY `Priority` (`Priority`),
  ADD KEY `Category` (`Category`);

--
-- Indexes for table `Technicians`
--
ALTER TABLE `Technicians`
  ADD PRIMARY KEY (`TechID`);

--
-- Indexes for table `TicketCategories`
--
ALTER TABLE `TicketCategories`
  ADD PRIMARY KEY (`CategoryID`);

--
-- Indexes for table `TicketPriorities`
--
ALTER TABLE `TicketPriorities`
  ADD PRIMARY KEY (`PriorityID`);

--
-- Indexes for table `TicketStatus`
--
ALTER TABLE `TicketStatus`
  ADD PRIMARY KEY (`StatusID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `AllTickets`
--
ALTER TABLE `AllTickets`
  ADD CONSTRAINT `AllTickets_ibfk_1` FOREIGN KEY (`AssignedTo`) REFERENCES `Technicians` (`TechID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `AllTickets_ibfk_2` FOREIGN KEY (`Status`) REFERENCES `TicketStatus` (`StatusID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `AllTickets_ibfk_3` FOREIGN KEY (`Priority`) REFERENCES `TicketPriorities` (`PriorityID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `AllTickets_ibfk_4` FOREIGN KEY (`Category`) REFERENCES `TicketCategories` (`CategoryID`) ON DELETE RESTRICT ON UPDATE RESTRICT;
