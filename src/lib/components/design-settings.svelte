<script lang="ts">
import { appState, type ImageUploadedState } from "$lib/state.svelte";
import Button from "./button.svelte";
import Slider from "./slider.svelte";
import { wallpaperCount } from "$lib/util";
import { downloadImage, copyToClipboard } from "$lib/designer";

let fileInput: HTMLInputElement | undefined = $state();

function onFileSelect(event: Event) {
	if (appState.variant !== "imageUploaded") return;
	const target = event.target as HTMLInputElement;
	if (!target.files?.length) return;
	const file = target.files[0];
	appState.wallpaperSelected = URL.createObjectURL(file);
}
</script>

<input
  bind:this={fileInput}
  type="file"
  accept="image/*"
  class="hidden"
  onchange={onFileSelect}
  multiple={false}
/>

{#if appState.variant == "imageUploaded"}
  <div class="flex flex-col h-full overflow-auto">
    <div class="p-6 space-y-8">
      <div class="w-full space-y-3">
        <div class="flex justify-between items-center">
          <span class="font-semibold">Padding</span>
          <span class="text-text/80 font-medium">{appState.padding}px</span>
        </div>
        <Slider bind:value={appState.padding} max={50} type="single" />
      </div>

      <div class="w-full space-y-3">
        <div class="flex justify-between items-center">
          <span class="font-semibold">Inset</span>
          <span class="text-text/80 font-medium">{appState.inset}px</span>
        </div>
        <Slider bind:value={appState.inset} max={50} type="single" />
        <input type="color" bind:value={appState.insetColor} />
      </div>

      <hr class="border-surface0" />

      <div class="w-full space-y-3">
        <div class="flex justify-between items-center">
          <span class="font-semibold">Outer Border Radius</span>
          <span class="text-text/80 font-medium"
            >{appState.outerBorderRadius}px</span
          >
        </div>
        <Slider
          bind:value={appState.outerBorderRadius}
          max={50}
          type="single"
        />
      </div>

      <hr class="border-surface0" />

      <div class="w-full space-y-3">
        <div class="flex justify-between items-center">
          <span class="font-semibold">Inner Border Radius</span>
          <span class="text-text/80 font-medium"
            >{appState.innerBorderRadius}px</span
          >
        </div>
        <Slider
          bind:value={appState.innerBorderRadius}
          max={50}
          type="single"
        />
      </div>

      <div class="w-full space-y-3">
        <span class="font-semibold">Background</span>
        <div class="grid gap-2 grid-cols-5 bg-surface0 p-2 rounded">
          {#each Array(wallpaperCount) as _, i}
            <button
              class="bg-cover bg-center bg-no-repeat wallpaper{i} w-8 h-8 shadow-mini rounded"
              aria-label="Select wallpaper {i + 1}"
              onclick={() =>
                ((appState as ImageUploadedState).wallpaperSelected = i)}
            ></button>
          {/each}
        </div>
        <Button
          class="bg-surface0 hover:bg-surface0/90 w-full py-2 h-fit"
          onclick={() => fileInput?.click()}>Choose custom wallpaper</Button
        >
      </div>
    </div>

    <div class="mt-auto p-6 space-y-2 border-t border-surface0">
      <Button
        onclick={downloadImage}
        class="bg-mauve hover:bg-mauve/90 text-base w-full py-2 h-fit"
        >Download</Button
      >
      <Button
        onclick={copyToClipboard}
        class="bg-surface0 hover:bg-surface0/90 w-full py-2 h-fit"
        >Copy to clipboard</Button
      >
    </div>
  </div>
{/if}
