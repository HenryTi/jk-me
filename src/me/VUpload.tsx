import { VPage } from "tonva-react";
import { CMe } from "./CMe";
import { FileUploader } from "./FileUploader";

export class VUpload extends VPage<CMe> {
    /*
    header() {return '测试上载视频文件大小'}

    content() {
        return <div>
            <FileUploader />
        </div>
    }
    */
    protected renderPage() {
        return <FileUploader />;
    }
}