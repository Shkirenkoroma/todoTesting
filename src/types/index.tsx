
export interface IPropsInput {
	setNoties: (e: string) => void;
	notiesData: string;
	setActiveModal: (e: boolean) => void;
	activeModal: boolean;
	error: boolean;
	setError: (e: boolean) => void;
}

export interface IPropsButton {
	className: string;
	buttonName: string;
	handleFunction: () => void;
}

export interface IState {
	noties: { noties: string[]; tags: string[] };
}

export interface IPropsNote {
	item: string;
	specificId: number;
}
export interface IEditInputProps {
	value: string;
	onChange: (e: string) => void;
}

export interface ILightProps {
	searchValue: string;
	string: string;
}
export interface ITagProps {
	item: string;
	setSortField: (e: string) => void;
}

export interface INotiesLayoutProps {
	activeModal: boolean;
	error: boolean;
}
export interface IPropsMapping {
	id: number;
	value: string;
}

export interface IPropsSearch {
	setSortFieldInput: (e: string) => void;
}

export type Note = {
	id: number;
	value: string;
};

export type NotiesState = {
	noties: Note[];
};
