import {Component, EventEmitter, Input, Output} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

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
      firstName: new FormControl(firstNameDefaultValue, Validators.required),
      lastName: new FormControl(lastNameDefaultValue, Validators.required),
      age: new FormControl(ageDefaultValue, [Validators.required, Validators.min(1), Validators.max(120)]),
      id: new FormControl(idDefaultValue)
    });
  }

  public addNewActor(form: FormGroup){
    this.newActorEvent.emit(form);
  }

  public removeActor(index: number){
    this.removeActorEvent.emit(index);
  }

  get actorFirstName(){
    return this.addActorForm.get('firstName');
  }

  get actorLastName(){
    return this.addActorForm.get('lastName');
  }

  get actorAge(){
    return this.addActorForm.get('age');
  }
}
