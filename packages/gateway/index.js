// https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent
/** @typedef {{ waitUntil(p: Promise): void }} Ctx */

export default {
  async fetch(request, env, ctx) {
    return new Response('Hello worker!', {
      headers: { 'content-type': 'text/plain' },
    })
  },
}
