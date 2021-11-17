# Entity Types

## Workspace

`Id`: Integer  
`Name`: String  
`Team`: List[Teammate]  
`Projects`: List[ProjectId]  

*AddTeammate(Teammate)*  
*DeleteTeammate(Teammate)*  

## Teammate

`Id`: Integer  
`Name`: String  
`Photo`: Link  
`Cotacts` : [ { type: Contact Type,  
value: 'username'}]

## Contact Type

*Telegram*  
*Slack*  
*GitHub*  

## Project

`Id`: Integer  
`Name`: String  
`MessengerChannelUrl`: Link  
`DateCreated`: Date  
`Picture`: Link  

## Task

`Id`: Integer  
`DateCreated`: Date  
`Text`: JSON  
`Status`: Status  
`Assignee`: Teammate:Id
`ParentId`: Integer  
`ProjectId`: Integer  

*AddAssignee(Teammate:Id): Notification:AssigneeAdded()*  
*ChangeStatus(Status)*  
*SetParentId()*

## Status

*Unsorted = 0*  
*ToDo = 1*  
*InProgress = 2*  
*OnReview = 3*  
*Done = 4*  
*ClodedWithoutChanges = 5*  

## Report

*sendToDoTasks()*  
*sendOnReviewTasks()*  

## Notification

`CodeXBot`: Link  

*TaskCreated()*  
*AssigneeAdded()*  
*TaskClosed()*  
*TaskStatusChanged()*  