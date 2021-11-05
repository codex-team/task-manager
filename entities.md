# Entity Types

## Workspace
`WorkspaceSettings`: Workspace Settings  
`Projects`: List[Project]
    
*Create(Project)*  
*Delete(Project)*

## Workspace Settings 
`WorkspaceName`: String  
`Team`: List[Teammate]

*Add a teammate(Teammate)*  
*Delete a teammate(Teammate)*

## Teammate
`Name`: String  
`Photo`: Link  
`Telegram`: Link  
`Slack`: Link  
`Email`: String  

## Project
`ProjectSettings`: Project Settings  
`Representation`: Representation  
`Backlog`: List[Task]

## Representation
*ListView(Backlog)*  
*ListSort(Backlog, condition)* 

*BoardView(Backlog)*  
*BoardSort(Backlog,condition)*  
*BoardChangeStatus(Task)*

## Project Settings
`ProjectName`: String  
`Chat`: Link  

*SetReport()*

## Task
`CreateDate`: Date  
`Text`: JSON  
`Subtasks`: list[Task]
`Status`: Status  
`Assignee`: WorkspaceSettings:Team  
  
*AddAssignee(WorkspaceSettings:Team): Notification:AssigneeAdded()*  
*ChangeStatus(Status)*

## Status
*Unsorted*  
*ToDo*  
*InProgress*  
*OnReview*  
*Done*  
*ClodedWithoutChanges*  
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