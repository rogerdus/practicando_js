"use server"
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

  export async function createTask(formData: FormData) {

    // Logic to create a new task
    const name = formData.get("name")?.toString() // Access form data
    const description = formData.get("description")?.toString() // Access form data
    const priority = formData.get("priority")?.toString() // Access form data

    if(!name || !description || !priority){
      return
    }

    await prisma.task.create({
      data: {
        name,
        description,
        priority,
      },
    })

    redirect('/')
  }

  export async function updateTask(formData: FormData){
    const id = formData.get('id')?.toString()
    const name = formData.get("name")?.toString() // Access form data
    const description = formData.get("description")?.toString() // Access form data
    const priority = formData.get("priority")?.toString() // Access form data

    if(!id || !name || ! description || !priority){
      return
    }

    await prisma.task.update({
      where: {
        id: parseInt(id!)
      },
      data: {
        name,
        description,
        priority
      }
    })

    redirect('/')

  }

 export async function removeTask(formData: FormData) {
    "use server"
    const taskId = formData.get('id')?.toString()

    if(!taskId) return;

    await prisma.task.delete({
        where: {
            id: parseInt(taskId)
        }
    })

    revalidatePath('/')
}