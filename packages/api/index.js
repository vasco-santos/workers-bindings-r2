// https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent
/** @typedef {{ waitUntil(p: Promise): void }} Ctx */

export default {
  async fetch(request, env, ctx) {
    const response = await env.GATEWAY.fetch(new Request('https://worker-bindings-r2-api.vasco-santos.workers.dev'))
    if (!response.ok) {
      throw new Error('response not ok')
    }

    let r2Object
    try {
      r2Object = await env.R2.put('key', response.body)
    } catch (err) {
      console.log('err', String(err))
      return new Response(String(err))
    }

    return new Response('ended api request with success')
  },
}
