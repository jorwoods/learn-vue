import { ref, watchEffect } from "vue"
import { ProjectBase, ProjectItem } from "@/types/ProjectItem"

import { projectFirestore } from '@/firebase/config'

const loadProjects = () => {
  const projects = ref<ProjectItem[]>([])
  const error = ref<string | null>(null)

  const load = async () => {
    try {

      const projectCollection = projectFirestore.collection('projects')
        .orderBy('updated_at', 'desc')

      const unsub = projectCollection
        .onSnapshot((snap) => {

          const results: ProjectItem[] = []
          snap.docs.map((doc) => {
            doc.data().createdAt && results.push({ ...doc.data() as ProjectBase, id: doc.id })
          })
          projects.value = results
        })

      watchEffect((onInvalidate) => {
          onInvalidate(() => unsub())
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
