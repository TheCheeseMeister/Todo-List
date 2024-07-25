class task {
    constructor(name, description, dueDate, priority) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;

        this.finished = false;
    }

    getName() { return this.name; }
    getDesc() { return this.description; }
    getDueDate() { return this.dueDate; }
    getPriority() { return this.priority; }
    getFinished() { return this.finished; }
    
    toggleFinished() { finished = !finished; }
}

export function addTaskToProject(project, name, desc, dueDate, priority) {
    project.tasks.push(new task(name, desc, dueDate, priority));
}

export function createProject(name) {
    let project = {
        title: name,
        tasks: [],
    };

    return project;
}