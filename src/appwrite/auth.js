import conf from "../config/config";
import { Client, Account, ID } from "appwrite";

class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount(email, password, name) {
        const userAccount = await this.account.create(
            ID.unique(),
            email,
            password,
            name
        );

        if (userAccount) {
            // call the login method
            return this.login(email, password);
        } else {
            return null;
        }
    }

    async login(email, password) {
        return await this.account.createEmailSession(email, password);
    }

    async getCurrentUser() {
        return await this.account.get();
    }

    async logout() {
        return await this.account.deleteSession("current");
    }

    async logoutAll() {
        return await this.account.deleteSessions();
    }
}

export const authService = new AuthService();

export default AuthService;
