import Actions, { GlobalAction } from './actions';
import { getRandomId } from '../tools/tools';
import {
  MembersType,
  RowsType,
  MemberType,
  UnsavedChangesType,
} from '../tools/globalTypes';

/*
* Types
* */
export interface BaseStateType {
  members : MembersType | Array<any>,
  rows : RowsType,
  unsavedChanges : UnsavedChangesType
}

/*
* Reducers
* */
const defaultState : BaseStateType = {
  members : [],
  rows : [],
  unsavedChanges : {}
};

function setMembersData(state : BaseStateType, action : GlobalAction) {
  const {members} = action;
  let rows : RowsType = [];

  members && members.forEach(member => {
    rows.push({
      person_id : member.person_id,
      role : "",
      access_level : ""
    });
  });

  return {
    ...state,
    members,
    rows
  };
}

function addNewMember(state : BaseStateType, action : GlobalAction) {
  const {member} = action;
  const newMembers = [...state.members];
  const alreadyExist = newMembers.find((currMember : MemberType) => currMember.person_id === member.person_id);

  if (!alreadyExist) {
    newMembers.push({
      ...member,
      person_id : getRandomId()
    });
  }

  return {
    ...state,
    members : newMembers
  };
}

function addNewRow(state : BaseStateType) {
  return {
    ...state,
    rows : [
      ...state.rows,
      {
        person_id : null,
        role : null,
        access_level : null
      }
    ]
  };
}

function removeRow(state : BaseStateType, action : GlobalAction) {
  const {rowIndex} = action;
  const newRows = [...state.rows].filter((row, index) => index !== rowIndex);

  return {
    ...state,
    rows : newRows
  };
}

function changeUnsavedProperty(state : BaseStateType, rowIndex : number, propertyName : string, newValue : string) {
  let newUnsavedChanges : UnsavedChangesType = {...state.unsavedChanges};

  if (!newUnsavedChanges[rowIndex]) {
    newUnsavedChanges[rowIndex] = {};
  }

  newUnsavedChanges[rowIndex][propertyName] = newValue;

  return newUnsavedChanges;
}

function memberChanged(state : BaseStateType, action : GlobalAction) {
  const {rowIndex, memberId} = action;
  const newUnsavedChanges = changeUnsavedProperty(state, rowIndex, "person_id", memberId);

  return {
    ...state,
    unsavedChanges : newUnsavedChanges
  };
}

function memberRoleChanged(state : BaseStateType, action : GlobalAction) {
  const {rowIndex, role} = action;
  const newUnsavedChanges = changeUnsavedProperty(state, rowIndex, "role", role);

  return {
    ...state,
    unsavedChanges : newUnsavedChanges
  };
}

function memberAccessLevelChanged(state : BaseStateType, action : GlobalAction) {
  const {rowIndex, accessLevel} = action;
  const newUnsavedChanges = changeUnsavedProperty(state, rowIndex, "access_level", accessLevel);

  return {
    ...state,
    unsavedChanges : newUnsavedChanges
  };
}

function saveChanges(state : BaseStateType) {
  const {unsavedChanges} = state;
  const newRows = [...state.rows];

  if (unsavedChanges) {
    newRows.forEach((row, index) => {
      const hasUnsavedChanges = unsavedChanges[index];

      if (hasUnsavedChanges) {
        newRows[index] = {
          ...row,
          ...hasUnsavedChanges
        };
      }
    });
  }

  return {
    ...state,
    rows : newRows,
    unsavedChanges : {}
  };
}

export default function(state = {...defaultState}, action : GlobalAction) {
  let newState;

  switch (action.type) {
    case Actions.SET_MEMBERS_DATA :
      newState = setMembersData(state, action);
      break;
    case Actions.ADD_NEW_MEMBER :
      newState = addNewMember(state, action);
      break;
    case Actions.ADD_NEW_ROW :
      newState = addNewRow(state);
      break;
    case Actions.REMOVE_ROW :
      newState = removeRow(state, action);
      break;
    case Actions.MEMBER_CHANGED :
      newState = memberChanged(state, action);
      break;
    case Actions.MEMBER_ROLE_CHANGED :
      newState = memberRoleChanged(state, action);
      break;
    case Actions.MEMBER_ACCESS_LEVEL_CHANGED :
      newState = memberAccessLevelChanged(state, action);
      break;
    case Actions.SAVE_CHANGES :
      newState = saveChanges(state);
      break;
    default :
      newState = state;
      break;
  }

  return newState;
}