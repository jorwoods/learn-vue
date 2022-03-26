import { ref } from 'vue'

const getPost = (id) => {
  const post = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      let data = await fetch("http://localhost:3000/posts/" + id)
      console.log(data)

      if (!data.ok) {
        throw Error("post does not exist")
      }

      post.value = await data.json()


    } catch (err) {
      // update the error ref's value with the content of the error message
      error.value = err.message
      console.log(error.value)
    }
  }

  return { post, error, load }
}

export default getPost
