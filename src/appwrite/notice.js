import conf from "../config/config";
import { Client, Databases, Query } from "appwrite";

class NoticeService {
    client = new Client();
    database;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.database = new Databases(this.client);
    }

    async getNotices() {
        return await this.database.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
        );
    }

    async createNotice(title, content) {
        return await this.database.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            {
                title: title,
                content: content,
                date: new Date().toISOString(),
            }
        );
    }
}

export const noticeService = new NoticeService();

export default NoticeService;
