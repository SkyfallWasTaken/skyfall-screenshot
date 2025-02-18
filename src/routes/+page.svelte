<script lang="ts">
import "../wallpapers.css"; // #usetheplatform ;)
import DesignSettings from "$lib/components/design-settings.svelte";
import Designer from "$lib/components/designer.svelte";
import UploadDropzone from "$lib/components/upload-dropzone.svelte";
import { appState } from "$lib/state.svelte";
import { Pane, PaneGroup, PaneResizer } from "paneforge";
import { fly } from "svelte/transition";
</script>

{#if appState.variant == "imageUploaded"}
  <div in:fly class="w-full h-full">
    <PaneGroup direction="horizontal">
      <Pane defaultSize={70}>
        <Designer />
      </Pane>
      <PaneResizer class="w-[2px] px-2" />
      <Pane defaultSize={20} class="border-surface0 bg-mantle border-l">
        <DesignSettings />
      </Pane>
    </PaneGroup>
  </div>
{:else}
  <!-- Dotted dark background -->
  <div class="absolute top-6 left-6">
    <a
      href="https://skyfall.dev"
      target="_blank"
      class="text-text/80 hover:text-mauve transition-colors duration-200"
    >
      Made with ❤️ by Skyfall
    </a>
  </div>
  <div
    class="flex flex-col justify-center items-center h-full
    bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"
    in:fly
  >
    <div class="mb-9 flex flex-col items-center">
      <h1 class="text-6xl text-center tracking-tight font-extrabold mb-3">
        Make your<br />screenshots
        <span
          class="text-black tracking-relaxed px-2 bg-mauve rounded shadow-mini italic"
          >pretty</span
        >
      </h1>
      <p class="text-xl w-2/3 text-center">
        Make your ugly-looking images and screenshots look <span
          class="text-blue">stunning</span
        > with Skyedit!
      </p>
    </div>
    <UploadDropzone />
  </div>
{/if}
