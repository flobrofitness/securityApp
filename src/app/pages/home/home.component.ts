import { Component, OnInit } from '@angular/core';
import { DiaryService } from '../../core/services/diary.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public diaryEntryForm: FormGroup;

    constructor(public diaryService: DiaryService) { }

    ngOnInit(): void {
        this.setupForm();

        this.diaryService.diaryEntries.subscribe((res) => {
            console.log(res);
        })
    }

    public setupForm() {
        this.diaryEntryForm = new FormGroup({
            entry: new FormControl('', [
                Validators.required
            ])
        });
    }

    addDiaryEntry() {
        console.log('Adding diary entry...');
        this.diaryService.createDiaryEntry(this.diaryEntryForm.value.entry);
    }

}
