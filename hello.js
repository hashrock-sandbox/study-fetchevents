
addEventListener("fetch", (event) => {
  console.log("hello_world.js got request url", event.request.url);
  console.log("hello_world.js got request method", event.request.method);
  console.log(
    "hello_world.js got request headers",
    JSON.stringify(event.request.headers),
  );
  console.log("hello.js start");
//   console.debug("level debug");
//   console.info("level info");
  console.warn("level warning");
  
  event.respondWith(
    new Response("Hello world", {
      status: 200,
      headers: {
        server: "denosr",
        "content-type": "text/plain",
      },
    }),
  );
});