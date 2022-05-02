--Data for Proposal Table
INSERT INTO [dbo].[Proposal] (ProposalName,CustomerGrpName,[Date],Description,[Status])
VALUES('proposal1','customerGrpName1','10-Dec-21','Detailed description1','In Preparation')

INSERT INTO [dbo].[Proposal] (ProposalName,CustomerGrpName,[Date],Description,[Status])
VALUES('proposal2','customerGrpName2','13-Jan-17','Detailed description2','Approved')

INSERT INTO [dbo].[Proposal] (ProposalName,CustomerGrpName,[Date],Description,[Status])
VALUES('proposal3','customerGrpName3','1-May-20' ,'Detailed description3','In Support')

INSERT INTO [dbo].[Proposal] (ProposalName,CustomerGrpName,[Date],Description,[Status])
VALUES('proposal4','customerGrpName4','17-Jun-14','Detailed description4','In Support')

INSERT INTO [dbo].[Proposal] (ProposalName,CustomerGrpName,[Date],Description,[Status])
VALUES('proposal5','customerGrpName5','20-Aug-12','Detailed description5','In Approve')

INSERT INTO [dbo].[Proposal] (ProposalName,CustomerGrpName,[Date],Description,[Status])
VALUES('proposal6','customerGrpName6','2-Aug-17' ,'Detailed description6','In Support')

INSERT INTO [dbo].[Proposal] (ProposalName,CustomerGrpName,[Date],Description,[Status])
VALUES('proposal7','customerGrpName7','20-Aug-12','Detailed description7','In Approve')

INSERT INTO [dbo].[Proposal] (ProposalName,CustomerGrpName,[Date],Description,[Status])
VALUES('proposal8','customerGrpName3','19-Dec-21','Detailed description8','In Preparation')

--Data for Facility Table
INSERT INTO [dbo].[Facility] (ProposalId,FacilityName,BookingCountry,Currency,StartDate,MaturityDate,[Limit])
VALUES(1,'Facility11','Australia','AUD','2020-03-31','2023-10-31','225000000')

INSERT INTO [dbo].[Facility] (ProposalId,FacilityName,BookingCountry,Currency,StartDate,MaturityDate,[Limit])
VALUES(1,'Facility12','Australia','AUD','2021-04-20','2023-09-30','125000000')

INSERT INTO [dbo].[Facility] (ProposalId,FacilityName,BookingCountry,Currency,StartDate,MaturityDate,[Limit])
VALUES(1,'Facility13','Australia','AUD','2020-03-31','2023-10-31','3250000000')

INSERT INTO [dbo].[Facility] (ProposalId,FacilityName,BookingCountry,Currency,StartDate,MaturityDate,[Limit])
VALUES(3,'Facility31','Australia','AUD','2020-03-31','2023-10-31','305000000')

INSERT INTO [dbo].[Facility] (ProposalId,FacilityName,BookingCountry,Currency,StartDate,MaturityDate,[Limit])
VALUES(3,'Facility32','Australia','AUD','2020-03-31','2023-10-31','235000000')

INSERT INTO [dbo].[Facility] (ProposalId,FacilityName,BookingCountry,Currency,StartDate,MaturityDate,[Limit])
VALUES(3,'Facility33','Australia','AUD','2020-03-31','2023-10-31','325000000')
