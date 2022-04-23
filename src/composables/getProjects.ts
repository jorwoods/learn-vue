import { ref } from "vue"
import { ProjectBase, ProjectItem } from "@/types/ProjectItem"

import { projectFirestore } from '@/firebase/config'

const loadProjects = () => {
  const projects = ref<ProjectItem[]>([])
  const error = ref<string | null>(null)

  const load = async () => {
    try {

      const response = await projectFirestore.collection('projects').get()
      projects.value = response.docs.map(doc => {
        return { ...doc.data() as ProjectBase, id: doc.id }
      })

    } catch (err: unknown) {
      if (err instanceof Error) {
        error.value = err.message
        console.log(err.message)
      }
    }
  }

  return { projects: projects, error, load }
}

export default loadProjects
