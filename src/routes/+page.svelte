<script lang="ts">
  import DesignSettings from "$lib/components/design-settings.svelte";
  import Designer from "$lib/components/designer.svelte";
  import UploadDropzone from "$lib/components/upload-dropzone.svelte";
  import { appState } from "$lib/state.svelte";
  import { Pane, PaneGroup, PaneResizer } from "paneforge";
</script>

{#if appState.variant == "imageUploaded"}
  <PaneGroup direction="horizontal">
    <Pane defaultSize={70}>
      <Designer />
    </Pane>
    <PaneResizer class="w-[2px] px-2" />
    <Pane defaultSize={20} class="border-surface0 bg-mantle border-l">
      <DesignSettings />
    </Pane>
  </PaneGroup>
{:else}
  <div class="flex justify-center items-center h-full">
    <UploadDropzone />
  </div>
{/if}
