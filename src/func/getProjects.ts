import { ref } from "vue"
import ProjectItem from "@/types/ProjectItem"

const loadProjects = () => {
  const projects = ref<ProjectItem[]>([])
  const error = ref<string | null>(null)
  const load = async () => {
    try {
      const data = await fetch("http://localhost:3000/projects")
      if (!data.ok){
        throw Error("No data available")
      }

      projects.value = await data.json()
    } catch (err: unknown) {
      if(err instanceof Error) {
        error.value = err.message
        console.log(err.message)
      }
    }
  }

  return { projects: projects, error, load }
}

export default loadProjects
