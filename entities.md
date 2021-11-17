# Entity Types

## Workspace

`Name`: String  
`Team`: List[Teammate]  
`Projects`: List[Project]

*AddTeammate(Teammate)*  
*DeleteTeammate(Teammate)*

## Teammate

`Name`: String  
`Photo`: Link  
`Cotacts:` : [ { type: Contact Type,  
value: 'username'}]

## Contact Type

*Telegram*  
*Slack*  
*GitHub*

## Project

`Name`: String  
`MessengerChannelUrl`: Link  
`Backlog`: Tasks
`DateCreated`: Date


## Tasks

`ProjectId`: Integer  
`TaskList`: List[Task]  

## Task

`DateCreated`: Date  
`Text`: JSON  
`Status`: Status  
`Assignee`: WorkspaceSettings:Team  
`ParentId`: Integer

*AddAssignee(WorkspaceSettings:Team): Notification:AssigneeAdded()*  
*ChangeStatus(Status)*  
*SetParentId()*

## Status

*Unsorted = 0*  
*ToDo = 1*  
*InProgress = 2*  
*OnReview = 3*  
*Done = 4*  
*ClodedWithoutChanges = 5*  
*CustomStatus*

## Report

*sendToDoTasks()*  
*sendOnReviewTasks()*

## Notification

`CodeXBot`: Link

*TaskCreated()*  
*AssigneeAdded()*  
*TaskClosed()*  
*TaskStatusChanged()*