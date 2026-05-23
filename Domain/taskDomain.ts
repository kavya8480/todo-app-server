export interface TaskTableAttributes {
    id: number;
    external_id: string;
    name: string;
    description: string;
    status: string;
    due_date: Date;
    notes:string;
    createdBy: string;
    updatedBy:string;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateTaskRequest {
    name:string;
    description:string;
    due_date:Date;
    notes:string
}

export interface UpdateTaskRequest{
    external_id:string;
    name:string;
    description:string;
    due_date:Date;
    notes:string;
    status:string;
}
export interface TaskDetailsRequest{
   external_id: string;
    name: string;
    description: string;
    due_date: Date;
    notes:string;
    createdBy: string;
    updatedBy:string;
    createdAt: Date;
    updatedAt: Date;
}