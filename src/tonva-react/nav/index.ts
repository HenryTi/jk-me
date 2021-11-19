import { Tonva } from 'tonva-core';
import { Nav } from './Nav';
//import { NavView } from './NavView';

export let nav: Nav; // = new Nav();
export function initNav(tonva: Tonva) {
    nav = new Nav(tonva);
}
/*
export class TonvaView extends NavView {

}
*/
export * from './Nav';
export * from './NavView';
