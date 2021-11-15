import React from 'react';
import ReactDOM from 'react-dom';
import { AppConfig } from "tonva-core";
import { CAppBase } from './app';

export class Tonva {
    static async start(appConfig: AppConfig) {

    }

    private readonly cAppBase: CAppBase<any>;

    constructor(cAppBase: CAppBase<any>) {
        this.cAppBase = cAppBase;
    }

    // run like mobile app
    async startApp() {    
        await this.start();
    }

    // run like web page
    async startPage() {
        await this.start();
    }

    private async start() {
        await this.cAppBase.init();
    }
}
