import prisma from "@/lib/prisma";
import { Button } from "./ui/button";
import { removeTask } from "@/actions/task-actions";

export async function TaskButtonDelete({taskId}: {taskId: number}) {

  return (
   <form action={removeTask}>
    <input type="hidden" name="id" value={taskId}/>
    <Button variant={'destructive'} >Delete</Button>
  </form>
  )
}
