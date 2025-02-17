<script lang="ts">
import { appState } from "$lib/state.svelte";
import ArrowLeft from "lucide-svelte/icons/arrow-left";
import Button from "./button.svelte";
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
  <div
    bind:this={appState.designerElement}
    class="flex justify-center items-center h-full"
  >
    <div class="w-[512px] overflow-hidden">
      <img
        src={URL.createObjectURL(appState.imageFile)}
        alt="File uploaded"
        style="border-radius: {appState.borderRadius}px;"
        class="w-full h-full object-cover"
      />
    </div>
  </div>
{/if}
