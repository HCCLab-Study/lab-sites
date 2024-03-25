export type Publication = Journals | Conferences;

export interface Journals {
	author: string;
	date: string;
	description: string;
	journals: string;
	citationIndex: string;
	award: string;
}

export interface Conferences {
	author: string;
	date: string;
	description: string;
	conferences: string;
	award: string;
}
