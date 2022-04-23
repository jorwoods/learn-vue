import { ref } from "vue"
import { ProjectBase, ProjectItem } from "@/types/ProjectItem"

import { projectFirestore } from '@/firebase/config'

const getProject = (id: string) => {
  const project = ref<ProjectItem>()
  const error = ref<string | null>(null)

  const load = async () => {
    try {

      const response = await projectFirestore.collection('projects').doc(id).get()

      if (!response.exists){
        throw Error("Project does not exist")
      }

      project.value = { ...response.data() as ProjectBase, id: response.id}

    } catch (err: unknown) {
      if (err instanceof Error) {
        error.value = err.message
        console.log(err.message)
      }
    }
  }

  return { project, error, load }
}

export default getProject
