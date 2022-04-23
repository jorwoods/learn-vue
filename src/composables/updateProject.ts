import { ref } from "vue"

import { projectFirestore } from '@/firebase/config'

const updateProject = (id: string) => {
  const updateError = ref<string | null>(null)

  const update = async (data: object) => {
    try {

      const response = await projectFirestore.collection('projects').doc(id).update(data)


    } catch (err: unknown) {
      if (err instanceof Error) {
        updateError.value = err.message
        console.log(err.message)
      }
    }
  }

  return { updateError, update }
}

export default updateProject
