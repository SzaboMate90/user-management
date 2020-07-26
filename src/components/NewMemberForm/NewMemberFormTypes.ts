import { AddNewMemberType } from "../../redux/actions";
import { MembersType } from '../../tools/globalTypes';

export interface FieldsType {
  [key: string]: {
    name : string,
    label : string,
    required ?: boolean,
    initialValue : any,
    hint ?: string,
    ComponentName : any
  }
}
export interface NewMemberFormType {
  closeModal : () => void,
  members : MembersType,
  dispatch : (action: AddNewMemberType) => void
}
export interface NewMemberFormStateType {
  error_message ?: string,
  required_errors ?: Array<string>,
  already_exist_errors ?: Array<string>,
  values : {
    [key: string] : any,
    firstname : string,
    lastname : string,
    is_user : boolean,
    title : string,
    business_unit : string
  }
}
