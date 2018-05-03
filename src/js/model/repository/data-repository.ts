import VideoEntity from '@model/entity/video-entity';
import PageEntity from '@model/entity/page-entity';
import { cloneDeep } from 'lodash-es';
import { IJsonVideo } from '@data/json/data-videos';

export type DataSupportedLangType = 'en' | 'fr'; // | 'nl' | 'de' | 'es';

export interface IDataRepositoryParams {
    fallbackLang: DataSupportedLangType;
    assetsBaseUrl: {
        video: string;
        audio: string;
    };
}

export interface IDataRepository {
    //getVideoEntity(videoId: string): Promise<VideoEntity>;
    getVideoEntity(videoId: string): VideoEntity | undefined;
    getPageEntity(pageId: string): PageEntity | undefined;
    getVideo(videoId: string): IJsonVideo | undefined;
}
