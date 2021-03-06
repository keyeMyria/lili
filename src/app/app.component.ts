import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { StudyService } from './studies/study.service';
import { SampleService } from './samples/sample.service';
import { SampleTypeService } from './SHARED/sample-type.service';
import { FilterTypeService } from './SHARED/filter-type.service';
import { MatrixService } from './SHARED/matrix.service';
import { UnitService } from './SHARED/unit.service';
import { UserService } from './SHARED/user.service';


@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [ StudyService, SampleService, SampleTypeService, FilterTypeService, MatrixService, UnitService, UserService ]
})
export class AppComponent {
    constructor(private router: Router) {
    }
}
