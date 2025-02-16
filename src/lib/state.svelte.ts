interface BaseState {
	variant: string;
}

interface NoUploadState {
	variant: "notUploaded";
}

interface ImageUploadedState {
	variant: "imageUploaded";
	imageFile: File;
	margin: number;
	borderRadius: number;
	designerElement?: HTMLDivElement;
}

type State = NoUploadState | ImageUploadedState;

export const appState: State = $state({
	variant: "notUploaded",
});

export function setImageUploaded(file: File) {
	(appState as ImageUploadedState).imageFile = file;
	(appState as ImageUploadedState).margin = 12;
	(appState as ImageUploadedState).borderRadius = 12;
	(appState as ImageUploadedState).designerElement = undefined;
	appState.variant = "imageUploaded";
}
