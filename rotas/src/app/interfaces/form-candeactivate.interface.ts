import { Observable } from "rxjs";

export interface FormCanDeactivate {
  podeDesativarRota(): Observable<boolean> | Promise<boolean> | boolean;
}
