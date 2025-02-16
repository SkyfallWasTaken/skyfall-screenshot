<script lang="ts">
import "../app.css";
import "@fontsource-variable/inter";
import { Toaster } from "svelte-sonner";
let { children } = $props();
</script>

<Toaster theme="dark" />
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
