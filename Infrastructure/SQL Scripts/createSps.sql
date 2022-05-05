CREATE PROCEDURE sp_GelAllProposal
AS
	SELECT * FROM [dbo].[Proposal]
GO;

CREATE PROCEDURE sp_GelAllFacility @ProposalId int
AS
	SELECT * FROM [dbo].[Facility] WHERE  ProposalId = @ProposalId
GO;