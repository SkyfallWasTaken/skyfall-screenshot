<script lang="ts">
import { appState } from "$lib/state.svelte";
import ArrowLeft from "lucide-svelte/icons/arrow-left";
import Button from "./button.svelte";
import Design from "./design.svelte";
</script>

{#if appState.variant == "imageUploaded"}
  <div class="flex transition justify-between items-center p-3">
    <Button
      class="hover:text-mauve"
      onclick={() => (appState.variant = "notUploaded")}
    >
      <ArrowLeft class="mr-2" />
      Back
    </Button>
  </div>
  <Design />
{/if}
