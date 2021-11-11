import { ID, IDX } from "../uqCore";
import { FieldCustoms } from "./fieldItem";

interface IDUIBase {
	fieldCustoms?: FieldCustoms;
	t?: any;
}

export interface IDUI extends IDUIBase {
	ID: ID;
}

export interface IDXUI extends IDUIBase {
	ID: ID|IDX;
}
