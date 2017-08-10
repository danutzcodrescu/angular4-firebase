import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'sentanceCase'
})
export class SentanceCasePipe implements PipeTransform {

	transform(value: string): string {
		return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
	}

}
