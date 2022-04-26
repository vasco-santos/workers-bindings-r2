// index.js
var api_default = {
  async fetch(request, env, ctx) {
    const response = await env.GATEWAY.fetch(new Request("https://worker-bindings-r2-api.protocol-labs.workers.dev"));
    if (!response.ok) {
      throw new Error("response not ok");
    }
    let r2Object;
    try {
      r2Object = await env.R2.put("key", response.body);
    } catch (err) {
      console.log("err", String(err));
      return new Response(String(err));
    }
    return new Response("ended api request with success");
  }
};
export {
  api_default as default
};
