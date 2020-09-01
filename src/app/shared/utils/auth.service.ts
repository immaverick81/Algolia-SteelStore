import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    getSessionInfo() {
        try {
            return JSON.parse(window.localStorage.getItem('token'));
        }
        catch (e) {
            return undefined;
        }
    }

    setSessionInfo(storageValue) {
        window.localStorage.setItem('token', JSON.stringify(storageValue));
    }

    removeSession() {
        window.localStorage.removeItem('token');
    }
    
}