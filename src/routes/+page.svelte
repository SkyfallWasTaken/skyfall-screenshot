<script lang="ts">
  import { PaneGroup, Pane, PaneResizer } from "paneforge";
  import UploadDropzone from "$lib/components/upload-dropzone.svelte";
  import DesignSettings from "$lib/components/design-settings.svelte";
</script>

<PaneGroup direction="horizontal">
  <Pane defaultSize={70}>
    <UploadDropzone />
  </Pane>
  <PaneResizer class="w-[2px] px-2" />
  <Pane defaultSize={20} class="border-surface2 bg-surface0 border-l">
    <DesignSettings />
  </Pane>
</PaneGroup>
