import { ParamActDetail, ParamActDetail2, ParamActDetail3, ParamActIX
    , ParamActIXSort, ParamID, ParamIDDetailGet, ParamIDinIX, ParamIDLog
    , ParamIDNO, ParamIDSum, ParamIDTree, ParamIDxID, ParamIX, ParamKeyID
    , ParamKeyIX, ParamQueryID, RetActDetail, RetActDetail2, RetActDetail3
    , Uq, UqMan } from "tonva-core";

export class UqReact implements Uq {
    private $_uqMan: UqMan;
    constructor(uqMan: UqMan) {
        this.$_uqMan = uqMan;
    }

    $_createProxy() {

    }

    getAdmins(): Promise<{ id: number; role: number; }[]> {
        throw new Error("Method not implemented.");
    }
    $: UqMan;
    Acts(param: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    $Acts(param: any): Promise<string> {
        throw new Error("Method not implemented.");
    }
    ActIX<T>(param: ParamActIX<T>): Promise<number[]> {
        throw new Error("Method not implemented.");
    }
    $ActIX<T>(param: ParamActIX<T>): Promise<string> {
        throw new Error("Method not implemented.");
    }
    ActIXSort(param: ParamActIXSort): Promise<void> {
        throw new Error("Method not implemented.");
    }
    $ActIXSort(param: ParamActIXSort): Promise<string> {
        throw new Error("Method not implemented.");
    }
    ActDetail<M, D>(param: ParamActDetail<M, D>): Promise<RetActDetail>;
    ActDetail<M, D, D2>(param: ParamActDetail2<M, D, D2>): Promise<RetActDetail2>;
    ActDetail<M, D, D2, D3>(param: ParamActDetail3<M, D, D2, D3>): Promise<RetActDetail3>;
    ActDetail(param: any): Promise<import("tonva-core").RetActDetail> | Promise<import("tonva-core").RetActDetail2> | Promise<import("tonva-core").RetActDetail3> {
        throw new Error("Method not implemented.");
    }
    $ActDetail<M, D>(param: ParamActDetail<M, D>): Promise<string>;
    $ActDetail<M, D, D2>(param: ParamActDetail2<M, D, D2>): Promise<string>;
    $ActDetail<M, D, D2, D3>(param: ParamActDetail3<M, D, D2, D3>): Promise<string>;
    $ActDetail(param: any): Promise<string> {
        throw new Error("Method not implemented.");
    }
    QueryID<T>(param: ParamQueryID): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    $QueryID<T>(param: ParamQueryID): Promise<string> {
        throw new Error("Method not implemented.");
    }
    IDNO(param: ParamIDNO): Promise<string> {
        throw new Error("Method not implemented.");
    }
    $IDNO(param: ParamIDNO): Promise<string> {
        throw new Error("Method not implemented.");
    }
    IDDetailGet<M, D>(param: ParamIDDetailGet): Promise<[M[], D[]]>;
    IDDetailGet<M, D, D2>(param: ParamIDDetailGet): Promise<[M[], D[], D2[]]>;
    IDDetailGet<M, D, D2, D3>(param: ParamIDDetailGet): Promise<[M[], D[], D2[], D3[]]>;
    IDDetailGet(param: any): Promise<any> {
        return this.uqMan.IDDetailGet(param);
    }
    $IDDetailGet<M, D>(param: ParamIDDetailGet): Promise<string>;
    $IDDetailGet<M, D, D2>(param: ParamIDDetailGet): Promise<string>;
    $IDDetailGet<M, D, D2, D3>(param: ParamIDDetailGet): Promise<string>;
    $IDDetailGet(param: any): Promise<string> {
        throw new Error("Method not implemented.");
    }
    ID<T>(param: ParamID): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    $ID<T>(param: ParamID): Promise<string> {
        throw new Error("Method not implemented.");
    }
    KeyID<T>(param: ParamKeyID): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    $KeyID<T>(param: ParamKeyID): Promise<string> {
        throw new Error("Method not implemented.");
    }
    IX<T>(param: ParamIX): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    $IX<T>(param: ParamIX): Promise<string> {
        throw new Error("Method not implemented.");
    }
    IXr<T>(param: ParamIX): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    $IXr<T>(param: ParamIX): Promise<string> {
        throw new Error("Method not implemented.");
    }
    KeyIX<T>(param: ParamKeyIX): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    $KeyIX<T>(param: ParamKeyIX): Promise<string> {
        throw new Error("Method not implemented.");
    }
    IDLog<T>(param: ParamIDLog): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    $IDLog<T>(param: ParamIDLog): Promise<string> {
        throw new Error("Method not implemented.");
    }
    IDSum<T>(param: ParamIDSum): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    $IDSum<T>(param: ParamIDSum): Promise<string> {
        throw new Error("Method not implemented.");
    }
    IDxID<T, T2>(param: ParamIDxID): Promise<[T[], T2[]]> {
        throw new Error("Method not implemented.");
    }
    $IDxID<T, T2>(param: ParamIDxID): Promise<string> {
        throw new Error("Method not implemented.");
    }
    IDinIX<T>(param: ParamIDinIX): Promise<T & { $in: boolean; }[]> {
        throw new Error("Method not implemented.");
    }
    $IDinIX<T>(param: ParamIDinIX): Promise<string> {
        throw new Error("Method not implemented.");
    }
    IDTree<T>(param: ParamIDTree): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    $IDTree<T>(param: ParamIDTree): Promise<string> {
        throw new Error("Method not implemented.");
    }
    IDTv(ids: number[]): Promise<any[]> {
        throw new Error("Method not implemented.");
    }
    IDRender(id: number, render?: (value: any) => JSX.Element): JSX.Element {
        throw new Error("Method not implemented.");
    }
    IDV<T>(id: number): T {
        throw new Error("Method not implemented.");
    }
    IDLocalTv(ids: number[]): Promise<any[]> {
        throw new Error("Method not implemented.");
    }
    IDLocalRender(id: number, render?: (value: any) => JSX.Element): JSX.Element {
        throw new Error("Method not implemented.");
    }
    IDLocalV<T>(id: number): T {
        throw new Error("Method not implemented.");
    }
}