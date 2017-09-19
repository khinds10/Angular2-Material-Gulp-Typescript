import {Injectable} from "@angular/core";
import {Task} from "../models/task";

@Injectable()
export class TaskService {

    private tasks:Array<Task> = [
        new Task("Get Milk", false),
        new Task("Buy Eggs", false),
        new Task("Brush Teeth", false),
        new Task("Learn Angular2", false),
        new Task("Read Books", false)
    ];

    getTasks():Array<Task> {
        return this.tasks;
    }

    addTask(name:string) {
        this.tasks.push(new Task(name, false));
    }

}