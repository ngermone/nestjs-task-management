import { CreateTastDto } from './dto/create-task.dto';
import { Task } from './task.model';
import { TasksService } from './tasks.service';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getAllTasks(): Task[];
    getTaskById(id: string): Task;
    createTask(createTaskDto: CreateTastDto): Task;
}
