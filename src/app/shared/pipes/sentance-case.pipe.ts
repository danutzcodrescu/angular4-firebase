import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'sentanceCase'
})
export class SentanceCasePipe implements PipeTransform {

	transform(value: string, args: string): string {
		const array = value.split(' ');
		if (array.length === 1 || args === "sentance") {
			return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
		} else {
			return array.map(elem => elem.charAt(0).toUpperCase() + elem.slice(1).toLowerCase()).join(' ');
		}
	}

}
