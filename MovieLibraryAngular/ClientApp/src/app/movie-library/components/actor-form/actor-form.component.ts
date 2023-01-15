import {Component, EventEmitter, Input, Output} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-actor-form',
  templateUrl: 'actor-form.component.html',
  styleUrls: ['actor-form.component.css']
})

export class ActorFormComponent {

  @Output()
  public newActorEvent: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  @Output()
  public removeActorEvent: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  public addActorForm: FormGroup;

  @Input()
  public isANewActor: boolean;

  @Input()
  public index: number;

  static addActorInfoItem(firstNameDefaultValue: string, lastNameDefaultValue: string, ageDefaultValue: number,
                          idDefaultValue: number): FormGroup{
    return new FormGroup({
      firstName: new FormControl(firstNameDefaultValue),
      lastName: new FormControl(lastNameDefaultValue),
      age: new FormControl(ageDefaultValue),
      id: new FormControl(idDefaultValue)
    });
  }

  public addNewActor(form: FormGroup){
    this.newActorEvent.emit(form);
  }

  public removeActor(index: number){
    this.removeActorEvent.emit(index);
  }

}
