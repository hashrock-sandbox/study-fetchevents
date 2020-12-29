console.log("hello.js start");

addEventListener("fetch", (event) => {
  console.log("hello_world.js got request url", event.request.url);
  console.log("hello_world.js got request method", event.request.method);
  console.log(
    "hello_world.js got request headers",
    JSON.stringify(event.request.headers),
  );
  console.debug("level debug");
  console.info("level info");
  console.warning("level warning");
  console.error("level error");
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