import { FA, LMR, VPage } from "tonva-react";
import { CAdmin } from "./CAdmin";

export class VAdmin extends VPage<CAdmin> {
	header() {return '管理员'}
	content() {
		return <div className="">
			<div className="my-1 small text-muted">
				<div className="px-3 py-2">说明</div>
				<ul>
					<li>建组</li>
					<li>建员工</li>
					<li>建组和员工的关系</li>
				</ul>
			</div>

			<LMR className="px-3 py-2 mb-1 cursor-pointer bg-white align-items-center" 
				left={<FA name="home" className="text-primary mr-3" />}
				onClick={this.controller.showTeams}>
				小组
			</LMR>

			<LMR className="px-3 py-2 mb-1 cursor-pointer bg-white align-items-center" 
				left={<FA name="home" className="text-primary mr-3" />}
				onClick={this.controller.showStaffs}>
				员工
			</LMR>
		</div>
	}
	//<button className="btn btn-sm btn-primary" onClick={this.controller.testC}>test C</button>
}
