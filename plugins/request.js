import { Notify } from 'vant'


function request (url, options = { headers: {}, method: 'get', json: null, body: "" }) {
  if (options.json) {
    options.body = JSON.stringify(options.json)
    if(!options.headers) options.headers = {}
    if(!Object.keys(options.headers).includes('Content-Type')) options.headers["Content-Type"] = 'application/json'
  }
  if(options.method) options.method = options.method.toUpperCase()
  let response

  return fetch(url, options)
    .then((r) => {
      response = r
      r.isBinary = false
      const contentType = r.headers.get('Content-Type')
      if(!contentType || contentType.startsWith('text/')) return r.text()
      if(contentType.startsWith('application/json')) return r.json()
      r.isBinary = true
      if(contentType.startsWith('application/vnd.openxmlformats')) return r.arrayBuffer()
      return r.blob()
    })
    .then((json) => {
      response.json = json
      return response
    })
    .catch(console.error.bind(console))
}

function notify(message) {
  return Notify({ type: 'danger', message, duration: 5000 })
}

function api (uri, options = { json: null, headers: {} }) {
  // const domain = 'https://api.monkeymoney.connect.cafe'
  const domain = 'http://localhost:3579'
  return request(`${domain}${uri}`, options)
  .then((response) => {
    if(!response.ok) {
      notify(response.json)
      if(response.status === 401) {
        $nuxt.$store.commit('logout')
      }
    }
    return response
  })
  .catch((error) => {
    console.error(error)
    notify(error)
  })
}

export default (context, inject) => {
  inject('request', request)
  inject('api', api)
}
