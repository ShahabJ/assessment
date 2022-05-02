-- DROP Table [dbo].[Facility]
-- Drop table [dbo].[Proposal]

CREATE TABLE [dbo].[Proposal] (
    Id INT IDENTITY(1,1) NOT NULL,    
    ProposalName VARCHAR(255) NOT NULL,
    CustomerGrpName VARCHAR(255) NOT NULL,
    [Date] DATE,
    Description NVARCHAR(255),
    [Status] NVARCHAR(50)
    PRIMARY KEY (Id)
);

CREATE TABLE [dbo].[Facility] (
    Id INT IDENTITY(1,1) NOT NULL,
    ProposalId INT FOREIGN KEY REFERENCES [dbo].[Proposal](Id),
    FacilityName VARCHAR(255),
    BookingCountry NVARCHAR(50),
    Currency CHAR(3),
    StartDate DATE,
    MaturityDate DATE,
    [Limit] DECIMAL(15, 2)
    PRIMARY KEY (Id)
);

