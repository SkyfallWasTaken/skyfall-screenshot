<script lang="ts">
import {
	appState as rawAppState,
	type ImageUploadedState,
} from "$lib/state.svelte";
const appState = rawAppState as ImageUploadedState;
</script>

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
