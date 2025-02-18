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
  <div class="w-full flex justify-center items-center">
    <div
      class="h-full flex items-center justify-center wallpaper{appState.wallpaperSelected}"
      bind:this={appState.designerElement}
      style="padding: {appState.padding}px;
      border-radius: {appState.outerBorderRadius}px;
      {typeof appState.wallpaperSelected === 'string' &&
        `background-image: url('${appState.wallpaperSelected}')`}"
    >
      <div>
        <img
          src={URL.createObjectURL(appState.imageFile)}
          alt="File uploaded"
          style="border-radius: {appState.innerBorderRadius}px; border: {appState.inset}px solid {appState.insetColor};"
          class="max-h-full"
        />
      </div>
    </div>
  </div>
{/if}
