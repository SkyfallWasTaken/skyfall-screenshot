<script lang="ts">
  import { PaneGroup, Pane, PaneResizer } from "paneforge";
  import { state } from "$lib/state.svelte";
  import UploadDropzone from "$lib/components/upload-dropzone.svelte";
  import Designer from "$lib/components/designer.svelte";
  import DesignSettings from "$lib/components/design-settings.svelte";
</script>

{#if state.variant == "imageUploaded"}
  <PaneGroup direction="horizontal">
    <Pane defaultSize={70}>
      <Designer />
    </Pane>
    <PaneResizer class="w-[2px] px-2" />
    <Pane defaultSize={20} class="border-surface2 bg-surface0 border-l">
      <DesignSettings />
    </Pane>
  </PaneGroup>
{:else}
  <div class="flex justify-center items-center h-full">
    <UploadDropzone />
  </div>
{/if}
