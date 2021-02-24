# Sprint Project: JavaScript Fundamentals

This Project allows you to practice the concepts and techniques learned over the past week and apply them in a survey of problems. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied array methods, this keyword, prototypes, and class syntax. In your Project this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Project.**

This is an individual assessment. All work must be your own. Your Project score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Project. However, you are encouraged to follow the twenty-minute rule and seek support from your GL and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in JavaScript fundamentals.

> You have four hours to complete this Project. Plan your time accordingly.

## Description

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your group lead

1. Briefly compare and contrast `.forEach` & `.map` (2-3 sentences max)
    - forEach - loops through items in a object or array, in which it will not change the items inside, and calls them. Also it doesn't manipulate the original array. 
    - .map- Map returns a new array by making a change to each item used the provided function, and also it doesn't manipulate the original array. 

2. Explain the difference between a callback and a higher order function.


3. What is closure?
    - closure is used for inheritance. when nesting functions, child function can have access to the parent scope.

4. Describe the four rules of the 'this' keyword.
    - window/global - Globel scope, 'this' uses window object in the console 
    - implicit- uses. Call, which will immediatlly invoke the function and pass the argument one by one.
                      Apply- will immediatlly invoke the function, but it passes array as in an argument.
                      Blind- it doesn't invoke the function immediatly, instead it reruns a brand new function that can be invoke later, and pass the argument one by one, 

5. Why do we need super() in an extended class?
    Supper- Gives parent class the attributes of a child class.

### Task 1 - Project Set up 

Follow these steps to set up and work on your project:
Make sure you clone the branch that the TK links to: the next branch, NOT main!

- [ ] Create a forked copy of this project.
- [ ] Add GL as collaborator on Github.
- [ ] Clone your OWN version of Repo (Not Gabi's by mistake!).
- [ ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ ] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
- [ ] You are now ready to build this project with your preferred IDE
- [ ] Implement the project on your Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.



### Task 2 - Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this Project: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

#### Task A: Objects and Arrays

Test your knowledge of advanced array methods and callbacks.
* [ ] Use the [arrays-callbacks.js](arrays-callbacks.js) link to get started.  Read the instructions carefully!

#### Task B: Closure

This challenge takes a look at closures as well as scope. 
* [ ] Use the [closure.js](closure.js) link to get started. Read the instructions carefully!

#### Task C: Prototypes

Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Use the [prototypes.js](prototypes.js) link to get started. Read the instructions carefully!

#### Task D: Classes

Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [ ] Use the [classes.js](classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 3 - Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!

## Submission Format

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into main (student's  Repo).
- [ ] Add your group lead as a Reviewer on the Pull-request
- [ ] GL then will count the HW as done by  merging the branch back into main.