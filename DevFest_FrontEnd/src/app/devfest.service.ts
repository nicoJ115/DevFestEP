import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Funder {
  id: number;
  user: {
    first_name: string;
    last_name: string;
  };
  InAccount: number;
  funding_date: string;
}

export interface Member {
  id: number;
  user: {
    first_name: string;
  };
  InBank: number;
  FinancialGoal: number;
  GoalReached: boolean;
  Profession: string;
  MoreAboutYourself: string;
  joined_date: string;
}

export interface Collaborator {
  id: number;
  member: {
    id: number;
    // user: {
    //   first_name: string;
    //   last_name: string;
    // };
  };
  funder: {
    id: number;
    // user: {
    //   first_name: string;
    //   last_name: string;
    // };
  };
  amount: number;
  details: string;
  collaboration_date: string;
}

@Injectable({
  providedIn: 'root'
})
export class DevfestService {
  private apiUrlFunder = '/api/funders';
  private apiMembersUrl = '/api/members';
  private apiUrl = '/api/Collaborator/';

  constructor(private http: HttpClient) { }

  getFunders(): Observable<Funder[]> {
    return this.http.get<Funder[]>(this.apiUrlFunder);
  }

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.apiMembersUrl);
  }

  getCollaborators(): Observable<Collaborator[]> {
    return this.http.get<Collaborator[]>(this.apiUrl);
  }


}
