-- Create a new database called 'TodoListDB'
-- Connect to the 'master' database to run this snippet
USE master
GO
-- Create the new database if it does not exist already
IF NOT EXISTS (
    SELECT [name]
FROM sys.databases
WHERE [name] = N'TodoListDB'
)
CREATE DATABASE TodoListDB
GO
-- Create the table to store the tasks
USE TodoListDB
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tasks]
(
    [Id] [int] IDENTITY(1,1) NOT NULL,
    [Description] [varchar](150) NOT NULL,
    [CreationDate] [datetime] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Tasks] ADD  CONSTRAINT [PK_Tasks] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Tasks] ADD  CONSTRAINT [DEFAULT_Tasks_CreationDate]  DEFAULT (getdate()) FOR [CreationDate]
GO
