import { wallpaperCount, random } from "./util";

interface BaseState {
  variant: string;
}

export interface NoUploadState {
  variant: "notUploaded";
}

export interface ImageUploadedState {
  variant: "imageUploaded";
  imageFile: File;
  padding: number;
  innerBorderRadius: number;
  outerBorderRadius: number;
  inset: number;
  insetColor: string;
  wallpaperSelected: number | string;
  designerElement?: HTMLDivElement;
}

type State = BaseState & (NoUploadState | ImageUploadedState);

export const appState: State = $state({
  variant: "notUploaded",
});

export function setImageUploaded(file: File) {
  const newState: ImageUploadedState = {
    imageFile: file,
    padding: 24,
    innerBorderRadius: 12,
    outerBorderRadius: 12,
    inset: 0,
    insetColor: "#ffffff",
    wallpaperSelected: random(wallpaperCount),
    designerElement: undefined,
    variant: "imageUploaded",
  };
  Object.assign(appState, newState);
}
