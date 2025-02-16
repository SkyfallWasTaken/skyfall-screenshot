export interface BaseState {
  variant: string;
}

export interface NoUploadState {
  variant: "notUploaded";
}

export interface ImageUploadedState {
  variant: "imageUploaded";
  imageFile: File;
  margin: number;
  borderRadius: number;
  designerElement?: HTMLDivElement;
}

export type State = NoUploadState | ImageUploadedState;

export const state: State = $state({
  variant: "notUploaded",
});

export function setImageUploaded(file: File) {
  (state as ImageUploadedState).imageFile = file;
  (state as ImageUploadedState).margin = 12;
  (state as ImageUploadedState).borderRadius = 12;
  (state as ImageUploadedState).designerElement = undefined;
  state.variant = "imageUploaded";
}
