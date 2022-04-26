// index.js
var gateway_default = {
  async fetch(request, env, ctx) {
    return new Response("Hello worker!", {
      headers: { "content-type": "text/plain" }
    });
  }
};
export {
  gateway_default as default
};
