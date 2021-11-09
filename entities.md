# Entity Types

## Workspace
`WorkspaceSettings`: Workspace Settings  
`Projects`: List[Project]
    
*Create(Project)*  
*Delete(Project)*

## Workspace Settings 
`WorkspaceName`: String  
`Team`: List[Teammate]

*AddTeammate(Teammate)*  
*DeleteTeammate(Teammate)*

## Teammate
`Name`: String  
`Photo`: Link  
`Telegram`: Link  
`Slack`: Link  
`Email`: String  

## Project
`ProjectSettings`: Project Settings  
`Backlog`: List[Task]  
`CreateDate`: Date

*Create()*  
*Delete()*

## Project Settings
`ProjectName`: String  
`Chat`: Link  

*SetReport()*  

## Task
`CreateDate`: Date  
`Text`: JSON  
`Status`: Status  
`Assignee`: WorkspaceSettings:Team 
`Parent_id`: Integer
  
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