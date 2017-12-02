import { Pipe, PipeTransform } from '@angular/core';
import { Product } from "./product";

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], filterText?: string): Product[] {
    filterText=filterText?filterText.toLocaleLowerCase():null; //filter text varsaa küçük harfe çevir eğer filter text yoksa null

    return filterText?value.filter((p:Product)=>p.productName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
