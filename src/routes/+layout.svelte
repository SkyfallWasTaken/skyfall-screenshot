<script lang="ts">
  import "../app.css";
  import "@fontsource-variable/inter";
  let { children } = $props();
</script>

<main class="pb-2 h-full">
  {@render children()}
</main>
