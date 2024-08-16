import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { createTask, updateTask } from "@/actions/task-actions"
import {Task} from "@prisma/client";
import Link from "next/link"

export async function TaskForm({task}: {task: Task}) {

  const functionAction = task?.id ? updateTask: createTask
  return (
    <form action={functionAction}>
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create Task</CardTitle>
        <CardDescription>
            Fill out the form below to create a new task.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <input type="hidden" name='id' value={task?.id} />
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name"
                     defaultValue={task?.name}
                     placeholder="Task's name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Description</Label>
              <Textarea id="description" name="description"
                        defaultValue={task?.description || ''}
                        placeholder="Task's Description" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="priority">Framework</Label>
              <Select name="priority" defaultValue={task?.priority}>
                <SelectTrigger id="priority">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href='/'
        className={buttonVariants({ variant: "secondary" })}>
          Cancel
        </Link>
        <Button> { task?.id ? "Update Task" : "Create Task"} </Button>
      </CardFooter>
    </Card>
    </form>
  )
}
