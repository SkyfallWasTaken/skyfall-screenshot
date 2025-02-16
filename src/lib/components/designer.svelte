<script lang="ts">
  import { state as appState } from "$lib/state.svelte";
</script>

{#if appState.variant == "imageUploaded"}
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
