import * as React from 'react';
import { observer } from 'mobx-react';
import { makeObservable, observable } from 'mobx';
import { LMR, Page, Loading, ResUploader } from 'tonva-react';

function formatSize(size: number, pointLength: number = 2, units?: string[]) {
    var unit;
    units = units || ['B', 'K', 'M', 'G', 'TB'];
    while ((unit = units.shift()) && size > 1024) {
        size = size / 1024;
    }
    return (unit === 'B' ? size : size.toFixed(pointLength === undefined ? 2 : pointLength)) + unit;
}
interface FileUploaderProps {
    id?: string;
    label?: string;
    onSaved?: (imageId: string) => Promise<void>;
}

// @observer
export class FileUploader extends React.Component<FileUploaderProps> {
    private static audioTypes = ['pdf', 'mp4'];

    private suffix: string;
    private resUploader: ResUploader;
    content: string;
    file: File;
    fileSize: number;

    isChanged: boolean = false;
    resId: string;
    enableUploadButton: boolean = false;
    fileError: string;
    uploaded: boolean = false;
    uploading: boolean = false;

    constructor(props: FileUploaderProps) {
        super(props);
        this.resId = props.id;
        makeObservable(this, {
            content: observable,
            file: observable,
            fileSize: observable,
        
            isChanged: observable,
            resId: observable,
            enableUploadButton: observable,
            fileError: observable,
            uploaded: observable,
            uploading: observable,
        });
    }

    private onFileChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        this.fileError = undefined;
        this.uploaded = false;
        this.enableUploadButton = evt.target.files.length > 0;
        if (this.enableUploadButton) {
            this.file = evt.target.files[0];
            let pos = this.file.name.lastIndexOf('.');
            if (pos >= 0) this.suffix = this.file.name.substr(pos + 1).toLowerCase();
            if (FileUploader.audioTypes.indexOf(this.suffix) < 0) {
                this.fileError = `文件类型必须是 ${FileUploader.audioTypes.join(', ')} 中的一种`;
                return;
            }
            let reader = new FileReader();
            reader.readAsDataURL(this.file);
            reader.onload = async () => {
                this.content = reader.result as string;
                this.fileSize = this.content.length;
            };
        }
    }

    private convertBase64UrlToBlob(urlData: string): Blob {
        let arr = urlData.split(',');
        let mime = arr[0].match(/:(.*?);/)[1];
        let bstr = atob(arr[1]);
        let n = bstr.length;
        let u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
    }

    private upload = async () => {
        if (!this.resUploader) return;
        this.uploading = true;
        let formData = new FormData();
        let blob = this.convertBase64UrlToBlob(this.content);
        formData.append('image', blob, this.file.name);
        let ret = await this.resUploader.upload(formData);
        if (typeof ret === 'object') {
            let { error } = ret;
            let type = typeof error;
            let err: string;
            switch (type) {
                case 'undefined': err = 'error: undefined'; break;
                case 'string': err = error; break;
                case 'object': err = error.message; break;
                default: err = String(err); break;
            }
            this.fileError = 'error: ' + type + ' - ' + err;
            return;
        }
        this.resId = ret;
        this.isChanged = (this.resId !== this.props.id);
        this.uploaded = true;
    }

    private onSaved = (): Promise<void> => {
        let { onSaved } = this.props;
        onSaved && onSaved(this.resId);
        return;
    }

    render() {
        return React.createElement(observer(() => {
            let { label } = this.props;
            let right = <button
                className="btn btn-sm btn-success align-self-center mr-2"
                disabled={!this.isChanged}
                onClick={this.onSaved}>保存</button>;
            return <Page header={label || '更改文件'} right={right}>
                <div className="my-3 px-3 py-3 bg-white">
                    <div>
                        <div className="mb-3">
                            <ResUploader ref={v => this.resUploader = v}
                                multiple={false} maxSize={20480}
                                label="选择文件"
                                onFilesChange={this.onFileChange} />
                            <div className="small text-muted">支持 {FileUploader.audioTypes.join(', ')} 格式。</div>
                            {this.fileError && <div className="text-danger">{this.fileError}</div>}
                        </div>
                    </div>
                </div>
                <LMR left=
                    {
                        this.uploaded === true ?
                            <div className="text-success p-2">上传成功！</div>
                            :
                            this.uploading === true ?
                                <div className="m-3"><Loading /></div>
                                :
                                this.file && this.content && <div className="m-3">
                                    <div className="mb-3">
                                        文件大小：{formatSize(this.fileSize)}
                                    </div>
                                    <button className="btn btn-primary"
                                        disabled={!this.enableUploadButton}
                                        onClick={this.upload}>上传</button>
                                </div>
                    }
                />
            </Page>;
        }))
    }
}
