# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer:
  To update the database, I would need to do a migration in order to add and/or append changes. The foreign key can be any name you choose,
  but in this case, it should be related to cohort. The student model would include the foreign key. 
  
  Researched answer:
  A foreign key is a field in one database that uniquely identifies a row in another table.
  For example, here we'll build two tables, one for expenses and one for categories of those expenses. Here, a foreign key of 1 in the category_id column will relate to food expenses, a foreign key of 2 will relate to accommodation expenses, and so forth.


2. Which RESTful routes must always be passed params? Why?

  Your answer:
  Anything that would be referencing an ID or value. It wouldn't know the value and or ID to reference. 
  
  Researched answer:
  In Rails, URL parameters are mapped to the router in the precise order in which they are passed. So you can pass a query parameter, form and or a url parameter. These parmeters must be referenced in order for params to function correctly. 


3. Name three rails generator commands. What is created by each?

  Your answer:
  rails g migration: Database migration. rails g model: Creates a model. rails g controller: Creates a view.
  
  Researched answer:
  rails g migration: Migrations are a feature of Active Record that allows you to evolve your database schema over time. Rather than write schema modifications in pure SQL, migrations allow you to use a Ruby DSL to describe changes to your tables.

  rails g model: A Rails Model is a Ruby class that can add database records (think of whole rows in an Excel table), find particular data you're looking for, update that data, or remove data.

  rails g controller: The Rails controller is the logical center of your application. It coordinates the interaction between the user, the views, and the model. The controller is also a home to a number of important ancillary services. It is responsible for routing external requests to internal actions.


4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    route: /students   #Index...Index would get all student records.        

action: "POST"   route: /students  #Post data..Would make model data available to the view.       

action: "GET"    route: /students/new #Create...That would allow you to create a new student. 

action: "GET"    route: /students/2  #It gets the student record by the ID value of 2.

action: "GET"    route: /students/2/edit  #Edit. It edits the second student record.   

action: "PATCH"  route: /students/2   #Update. It updates the second student record.    

action: "DELETE" route: /students/2 Delete. Deletes the second student record.      



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. As a user I can create a to-do list.
2. As a user I can update a to-do list.
3. As a user I can delete a to-do list. 
4. As a user I can add a task to a to-do list. 
5. As a user I can filter a task within a to-do list. 
6. As a user a to-do list should have a title.
7. As a user I can add a tag to the to-do list. 
8. As a user a to-do list should be associated with a date time stamp.
9. As a user I should be able to sort to-do list by date created.
10. As a user I should be able to have many to-do lists. 