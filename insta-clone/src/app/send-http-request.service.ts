import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SendHttpRequestService {

  constructor( private http: HttpClient) { }

  private log(message: string) {
    console.log(message);
  }

  signMeUp(obj): Observable<any>{
    return this.http.post("http://localhost:8080/signup", obj).pipe(
      tap(_ => this.log("Signed Up")),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  logMeIn(obj): Observable<any>{
    return this.http.post("http://localhost:8080/login", obj, {responseType: 'text'}).pipe(
      tap(_ => this.log("Signed Up")),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  posts(): Observable<any>{
    return this.http.get("url to come here");
  }

  likePost(obj):Observable<any>{
    return this.http.put("http://localhost:8080/like", obj).pipe(
      tap(_ => this.log("Liked Picture")),
      catchError(this.handleError<any>('error in liking post'))
    );
  }

  commentPost(obj):Observable<any>{
    return this.http.post("http://localhost:8080/comment", obj).pipe(
      tap(_ => this.log("Commented")),
      catchError(this.handleError<any>('error in commenting on post'))
    );
  }

  
  followUser(obj):Observable<any>{
    return this.http.post("http://localhost:8080/follow", obj).pipe(
      tap(_ => this.log("Followed")),
      catchError(this.handleError<any>('error in following'))
    );
  }

  unfollowUser(obj):Observable<any>{
    return this.http.post("http://localhost:8080/unfollow", obj).pipe(
      tap(_ => this.log("Unfollowed")),
      catchError(this.handleError<any>('error in unfollowing'))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
    };
  }
}