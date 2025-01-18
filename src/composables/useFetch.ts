import { ref } from "vue"

export function useFetch(url: string){
  const data = ref(null)
  const error = ref(null)

  fetch(url)
    .then(response => response.json())
    .then(json => data.value = json)
    .catch(err => error.value = err)

    return { data, error }
}
