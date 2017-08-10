import { TranslateService } from 'app/shared/translate/translate.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'translate'
})
export class TranslatePipe implements PipeTransform {

	constructor(private translate: TranslateService) { }

	transform(value: string): string {
		return this.translate.get(value);
	}

}
