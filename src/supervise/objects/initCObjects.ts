import { CSupervise } from "../CSupervise";
import { CAgents } from "./CAgents";
import { CDistributors } from "./CDistributors";
import { CGroups } from "./CGroups";
import { CObjects } from "./CObjects";
import { CPosts } from "./CPosts";
import { CStaffs } from "./CStaffs";

export function initCObjects(cSupervise: CSupervise): CObjects[] {
    return [
        new CGroups(cSupervise),
        new CDistributors(cSupervise),
        new CAgents(cSupervise),
        new CPosts(cSupervise),
        new CStaffs(cSupervise),
    ];
}
