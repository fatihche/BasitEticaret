import { Observable } from "rxjs/Observable";
import { CanDeactivate } from "@angular/router/router";

export interface ComponentCanDeactivate {
    canDeactivate:()=>boolean|Observable<boolean>;//boolean da döndürebilir observable<boolean> da döndürebilir.
}
export class PendingChangesGuard implements CanDeactivate<ComponentCanDeactivate>{
canDeactivate(component:ComponentCanDeactivate):boolean|Observable<boolean>{
    if(component.canDeactivate()){
        return true;
    }
    else{
        return confirm('you have unsaved changes.Are you sure?');
    }
}
}