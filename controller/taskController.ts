import { Request, Response } from "express";
import  logger  from "..//logger";
import { CreateTaskRequest, UpdateTaskRequest } from "../Domain/taskDomain" ;
import { CreatetTaskRepository } from "../repository/taskRepository";
import { CreateTaskUsecase, DeleteTaskUsecase, GetAllTaskUsecase, TaskDetailsUsecase, UpdateTaskUsecase } from "../useCase/taskUsecase";
import { Task } from "../models";


export async function CreateTask(req:Request,res:Response) {
    console.log("CREATE API HIT");
    logger.info('Inside task create controller');
    let request = {} as CreateTaskRequest;
    request.name = req.body.name;
    request.description = req.body.description;
    request.due_date = req.body.due_date;
    request.notes = req.body.notes;

    logger.debug("after mapping to the task request", request);

    let response = await CreateTaskUsecase(request);
    //  CreatetTaskRepository(request);

if(response) {
    return res.send(response);
}

return res.send({
    message: "Task Creation failed"
});
}

 export async function DeleteTask(req:Request, res:Response) {
    console.log("Delete task in controller");
    let externalId = req.params.task_ext_id as string;
    logger.debug("After deleting task with externalId ", + externalId);
let response = await DeleteTaskUsecase(externalId);

if (response) {
        return res.send({
            message: "Task deleted successfully"
        });
    }

    return res.send({
        message: "Task not found"
    });
}

export async function UpdateTask(req:Request, res:Response) {
    console.log("Inside Update Task Controller");
let request = {} as UpdateTaskRequest;
request.external_id= req.params.task_ext_id as string;
  request.name = req.body.name;
    request.description = req.body.description;
    request.due_date = req.body.due_date;
    request.notes = req.body.notes;
    request.status= req.body.status;
    let response = await UpdateTaskUsecase(request);

    if(response) {
    return res.send(response);
}

return res.send({
    message: "Task Updation failed"
});
}

export async function get_all_task(req:Request, res:Response) {
    console.log("Inside Get all task.");
    let response = await GetAllTaskUsecase();
    logger.info("Got the task in controller :", response)
    res.send({"all_tasks": response});
}

 export async function taskDetails(req:Request, res:Response) {
    console.log("Inside Task Details.");
let externalId = req.params.task_ext_id as string;
logger.debug("Task Details with externalId", externalId)
let response = await TaskDetailsUsecase(externalId);
logger.info("Got the task details in controller:", response);
res.send({"Task Details": response});
}