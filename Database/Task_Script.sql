CREATE DATABASE TaskManagement
GO
USE [TaskManagement]
GO
/****** Object:  Table [dbo].[Task]    Script Date: 07/19/2020 10:02:41 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Task](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[description] [varchar](100) NULL,
	[shortDescription] [varchar](100) NULL,
	[priority] [varchar](100) NULL,
	[status] [varchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
SET IDENTITY_INSERT [dbo].[Task] ON
INSERT [dbo].[Task] ([id], [description], [shortDescription], [priority], [status]) VALUES (65, N'Task1', N'Task1 Description', N'Low', N'Not Started ')
INSERT [dbo].[Task] ([id], [description], [shortDescription], [priority], [status]) VALUES (66, N'Task2', N'Task2 Description', N'Medium', N'Completed')
SET IDENTITY_INSERT [dbo].[Task] OFF
