<script lang="ts">
  import "../app.css";
  import "@fontsource-variable/inter";
  let { children } = $props();
</script>

<div class="flex min-h-screen">
  <main class="flex-1 overflow-y-auto">
    {@render children()}
  </main>
</div>

<style>
  :global(html, body) {
    height: 100%;
  }
</style>
