# Entity Types

## User
```id```: Integer  
```name```: String  
```email```: String [Discussion: other services for authorization]  
```password```: String   
```tasks```: List
  
```links_to_other_accounts```: List *[for next integration]*

***

## Task
```id```: Integer  
```name```: String  
```thesis```: String *[some short info about task]*  

```description```: List *[field for text, pictures and other data]*  
```labels```: List [Label] 

***

~~## Workspace  
```id```: Integer  
```name```: String  
```members```: List [User]  
```tasks```: List [Task]  
```views```: List [View]~~
  
***

### Label
```workspace```: String [Discussion: using labels as basis] 
```status```: Status [Discussion: states from user]  
```priority```: Priority  
```timesteps```: List[Task]  
```deadline```: Date  
```assignee```: List [User]  
```comments```: List [String]  
```author```: List [User]  

***

### Status
```
* None - default
* TODO 
* In progress
* Overdue  
* On review  
* Finished
```

***

### Proirity
```
* None - default
* High
* Medium
* Low
```

***

### View
```
* Backlog - default
* Canban Board  
* Calendar
* Timeline
```