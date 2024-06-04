import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "pascalcase",
  standalone: true,
})
export class PascalCasePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return value;
    }

    return value[0].toLocaleUpperCase() + value.slice(1);
  }
}
