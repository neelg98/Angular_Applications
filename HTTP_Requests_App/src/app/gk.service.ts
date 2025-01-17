import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GkService {

    constructor(private http: HttpClient) {}

    createAndStorePost(title: string, answer: string, content: string) {

      const postData: Post = { title: title, answer: answer, content: content };
      this.http
      .post<{ name: string }>('https://general-knowledge-application-default-rtdb.firebaseio.com/gk.json',
      postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
    }

    fetchPosts() {

        return this.http
        .get<{ [key: string]: Post }>('https://general-knowledge-application-default-rtdb.firebaseio.com/gk.json')
        .pipe(
          map(responseData => {
            const postsArray: Post[] = [];
            for (const key in responseData) {
              if (responseData.hasOwnProperty(key)) {
                postsArray.push({ ...responseData[key], id: key });
              }
            }
            return postsArray;
          })
        ); 
    }  

    deletePosts() {
        return this.http.delete('https://general-knowledge-application-default-rtdb.firebaseio.com/gk.json');
    }
}