import {
  RoleType,
  MemberIdType,
  AccessLevelType,
  CreateMemberType,
  MembersType,
  MemberType
} from '../tools/globalTypes';

/*
* Types
* */
export interface GlobalAction {
  type : string,
  members : MembersType,
  member : MemberType,
  rowIndex : number,
  role : RoleType,
  memberId : MemberIdType,
  accessLevel : AccessLevelType
}

/*
* Actions
* */
export interface SetMembersDataType { type : string, members : MembersType }
export const SET_MEMBERS_DATA = "SET_MEMBERS_DATA";
export const setMembersData = (members : MembersType) => ({ type : SET_MEMBERS_DATA, members });

export interface AddNewMemberType { type : string, member : CreateMemberType }
export const ADD_NEW_MEMBER = "ADD_NEW_MEMBER";
export const addNewMember = (member : CreateMemberType) => ({ type : ADD_NEW_MEMBER, member });

export interface MemberRoleChangedType { type : string, rowIndex : number, role : RoleType }
export const MEMBER_ROLE_CHANGED = "MEMBER_ROLE_CHANGED";
export const memberRoleChanged = (rowIndex : number, role : RoleType) => ({ type : MEMBER_ROLE_CHANGED, rowIndex, role });

export interface MemberChangedType { type : string, rowIndex : number, memberId : MemberIdType }
export const MEMBER_CHANGED = "MEMBER_CHANGED";
export const memberChanged = (rowIndex : number, memberId : MemberIdType) => ({ type : MEMBER_CHANGED, rowIndex, memberId });

export interface MemberAccessLevelChangedType { type : string, accessLevel : AccessLevelType, rowIndex : number }
export const MEMBER_ACCESS_LEVEL_CHANGED = "MEMBER_ACCESS_LEVEL_CHANGED";
export const memberAccessLevelChanged = (rowIndex : number, accessLevel : AccessLevelType) => ({ type : MEMBER_ACCESS_LEVEL_CHANGED, rowIndex, accessLevel });

export interface AddNewRowType { type : string }
export const ADD_NEW_ROW = "ADD_NEW_ROW";
export const addNewRow = () => ({ type : ADD_NEW_ROW });

export interface RemoveRowType { type : string, rowIndex : number }
export const REMOVE_ROW = "REMOVE_ROW";
export const removeRow = (rowIndex : number) => ({ type : REMOVE_ROW, rowIndex });

export interface SaveChangesType { type : string }
export const SAVE_CHANGES = "SAVE_CHANGES";
export const saveChanges = () => ({ type : SAVE_CHANGES });

export default {
  SET_MEMBERS_DATA,
  setMembersData,
  ADD_NEW_MEMBER,
  addNewMember,
  MEMBER_ROLE_CHANGED,
  memberRoleChanged,
  MEMBER_ACCESS_LEVEL_CHANGED,
  memberAccessLevelChanged,
  ADD_NEW_ROW,
  addNewRow,
  REMOVE_ROW,
  removeRow,
  MEMBER_CHANGED,
  memberChanged,
  SAVE_CHANGES,
  saveChanges
};