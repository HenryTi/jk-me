import { TFunc } from "tonva-core";
import { Render, UI } from '../ui';

export interface IDXEntity<M> {
	readonly ui: UI;
	readonly render: Render<M>;
	readonly t: TFunc;
}
