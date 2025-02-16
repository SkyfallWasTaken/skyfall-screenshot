<script lang="ts">
  import { PaneGroup, Pane, PaneResizer } from "paneforge";
  import { state } from "$lib/state.svelte";
  import UploadDropzone from "$lib/components/upload-dropzone.svelte";
  import DesignSettings from "$lib/components/design-settings.svelte";

  let selectedFile: File | null = null;

  function handleFileSelected(event: CustomEvent<File>) {
    selectedFile = event.detail;
    // You can now handle the file however you want
    console.log("File selected:", selectedFile);
  }
</script>

{#if state.variant == "imageUploaded"}
  <PaneGroup direction="horizontal">
    <Pane defaultSize={70}>
      <h1 class="text-4xl font-bold">WIP</h1>
    </Pane>
    <PaneResizer class="w-[2px] px-2" />
    <Pane defaultSize={20} class="border-surface2 bg-surface0 border-l">
      <DesignSettings />
    </Pane>
  </PaneGroup>
{:else}
  <UploadDropzone on:fileSelected={handleFileSelected} />
{/if}
