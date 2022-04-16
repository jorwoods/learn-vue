import { ref } from "vue"
import ProjectItem from "@/types/ProjectItem"

const loadProjects = (url: string) => {
  const projects = ref<ProjectItem[]>([])
  const error = ref<string | null>(null)
  const load = async () => {
    try {
      const data = await fetch(url)
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
