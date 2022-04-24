# COMP2035 Subtask Timer System

- [System requerements](#system-requerements)
- [Installation](#installation)
- [Start the app](#start-the-app)
- [Adding, deleting tasks](#adding-deleting-tasks)
- [Ticking off & Rating tasks](#ticking-off-and-rating-tasks)
- [Accessibility for vision impaired](#accessibility-for-vision-impaired)


## System requerements

1. Node.js (version 16.14.2 or hier)
2. Yarn package manager
3. Git

## Installation

Installation script will download and install all necessary dependencies

    $ install.sh

## Start the app

To run the application you need to start two scripts.

_To run UI:_

    $ run.sh

_To be able to export tasks via email:_

    $ run-mail-server.sh

# User documentation

## Adding, deleting tasks

Users can enter any number of tasks and allocate a time in minutes for each one via the form inputs. The system will not allow a user to create a task without a task title and time in minutes. When the 'play' icon is ticked the timer begins and displays how much time is remaining. If a user starts a new task while another is running, the system will auto-pause the running task so the user can return to it later.  Users can also destroy a task if it is no longer included in the agenda.

![Adding Tasks](img/tasks.png)

## Ticking off & Rating tasks

A user can ‘tick-off’ a task by pressing the 'tick' icon and the system will prompt the user to rate the efficiency of the discussion of that particular task. This is achieved by hovering over the desired star rating and clicking.

![Rating tasks](img/rating.png)

## Accessibility for vision impaired

A user can toggle the font size of task information by clicking on the 'font size' button on the top right

![Large font](img/large-font.png)
