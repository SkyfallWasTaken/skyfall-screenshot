<script lang="ts">
import Slider from "./slider.svelte";
import Button from "./button.svelte";
import * as htmlToImage from "html-to-image";
import { appState } from "$lib/state.svelte";

function downloadImage() {
	if (appState.variant !== "imageUploaded" || !appState.designerElement) return;

	htmlToImage
		.toPng(appState.designerElement)
		.then((dataUrl) => {
			const link = document.createElement("a");
			link.download = "skyfall-screenshot.png";
			link.href = dataUrl;
			link.click();
		})
		.catch((error) => {
			console.error("Oops, something went wrong!", error);
		});
}
</script>

{#if appState.variant == "imageUploaded"}
  <div class="flex flex-col h-full">
    <div class="p-6 space-y-8">
      <div class="w-full space-y-3">
        <div class="flex justify-between items-center">
          <span class="font-semibold">Margin</span>
          <span class="text-text/80 font-medium">{appState.margin}px</span>
        </div>
        <Slider bind:value={appState.margin} max={32} type="single" />
      </div>
      <div class="w-full space-y-3">
        <div class="flex justify-between items-center">
          <span class="font-semibold">Border Radius</span>
          <span class="text-text/80 font-medium">{appState.borderRadius}px</span
          >
        </div>
        <Slider bind:value={appState.borderRadius} max={32} type="single" />
      </div>
    </div>

    <div class="mt-auto p-6">
      <Button
        onclick={downloadImage}
        class="bg-mauve hover:bg-mauve/90 text-base w-full py-2 h-fit"
        >Download</Button
      >
    </div>
  </div>
{/if}
