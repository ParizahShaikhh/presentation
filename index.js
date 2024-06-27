"use strict";
// Real-World Example:
Object.defineProperty(exports, "__esModule", { value: true });
//  Days of the Week in a Scheduling Application 
// Enums can be used to represent the days of the week, making it easier to work with scheduling tasks or events.
// Step-by-Step Explanation:
// 1. Define the Enum:
// Create an enum to represent the days of the week:
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["Sunday"] = 0] = "Sunday";
    DaysOfWeek[DaysOfWeek["Monday"] = 1] = "Monday";
    DaysOfWeek[DaysOfWeek["Tuesday"] = 2] = "Tuesday";
    DaysOfWeek[DaysOfWeek["Wednesday"] = 3] = "Wednesday";
    DaysOfWeek[DaysOfWeek["Thursday"] = 4] = "Thursday";
    DaysOfWeek[DaysOfWeek["Friday"] = 5] = "Friday";
    DaysOfWeek[DaysOfWeek["Saturday"] = 6] = "Saturday";
})(DaysOfWeek || (DaysOfWeek = {}));
// 2. Use the Enum in a Function:
// Use the DaysOfWeek enum in a function that schedules a task on a specific day:
function scheduleTask(task, day) {
    console.log(`Scheduled task: "${task}" on ${DaysOfWeek[day]}`);
}
// 3.  Demonstrate the Usage:
// Schedule a few tasks using the enum:
scheduleTask("Team Meeting", DaysOfWeek.Monday);
scheduleTask("Code Review", DaysOfWeek.Wednesday);
scheduleTask("Project Demo", DaysOfWeek.Friday);
// Explanation:
// *DaysOfWeek Enum:
//  This enum defines the days of the week, starting with Sunday (assigned 0) and ending with Saturday (assigned 6).
// *scheduleTask Function: 
// This function takes a task and a day (using the DaysOfWeek enum) and logs a message indicating when the task is scheduled.
// *Usage Example: 
// The example schedules tasks on different days using the DaysOfWeek enum.
// **Key Points to Highlight:
// Using enums for days of the week makes the code more readable and less error-prone.Enums ensure that only valid days are used in scheduling tasks.The example demonstrates a practical use case that is easy to understand and implement.
