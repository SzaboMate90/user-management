import Field from '../Field/Field';
import CheckBox from '../CheckBox/CheckBox';

export default {
  firstname : {
    name : "firstname",
    label : "First name",
    required : true,
    initialValue : "",
    ComponentName : Field
  },
  lastname : {
    name : "lastname",
    label : "Last name",
    required : true,
    initialValue : "",
    ComponentName : Field
  },
  is_user : {
    name : "is_user",
    label : "User status",
    initialValue : false,
    hint : "Designates whether the person can login into application",
    ComponentName : CheckBox
  },
  title : {
    name : "title",
    label : "Title",
    initialValue : "",
    ComponentName : Field
  },
  business_unit : {
    name : "business_unit",
    label : "Business unit",
    initialValue : "",
    ComponentName : Field
  }
};