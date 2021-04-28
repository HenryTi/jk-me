//import { showIDUnitCustomer } from "relations/customer";
import { CID } from "tonva-uqui";
import { JkMe } from "uq-app";
import { Team } from "uq-app/uqs/JkMe";
//import { Unit } from "uq-app/uqs/JkCustomer";

export class CIDTeam extends CID<Team> {
	async onItemView() {
		let uq = this.midID.uq as JkMe.UqExt;
		//await showIDUnitCustomer(uq, this.item.id);
	}
}
