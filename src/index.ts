import App from "~/App.svelte";

var app = new App({
  target: document.body
});

export default app;

// Hot Module Replacement (HMR)
// https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    app.$destroy();
  });
}
