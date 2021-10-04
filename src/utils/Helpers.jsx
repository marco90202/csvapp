import Axios from 'axios'

export function post(endpoint = null, body = null, headers = null, fn) {
    let app_url = 'https://jsonplaceholder.typicode.com'

    if(endpoint === null) return 

    Axios.post(app_url+endpoint, body, {
        headers: {'Content-type': 'application/json; charset=UTF-8'}
    })
    .then(r => fn(r.status, r.data))
    .catch(er => {
        if(typeof er.response === 'undefined') return fn(500, {error: 'Error de conexión'})
        return fn(er.response.status, er.response)
    })

}

