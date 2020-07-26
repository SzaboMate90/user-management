import * as React from 'react';

export type ChildrenType = React.ReactNode | string;
export type PropsChildrenType = {
  children : ChildrenType
};
export type MemberIdType = string;
export type RoleType = string;
export type AccessLevelType = string;
export type RowType = {
  person_id : MemberIdType,
  role : RoleType,
  access_level : AccessLevelType
}
export type RowsType = Array<RowType>;
export type UnsavedChangesType = null | {
  [key: string]: any
};
export interface CreateMemberType {
  firstname : string,
  lastname : string,
  title : string,
  business_unit : string,
  is_user : boolean
}
export interface MemberType {
  person_id : string,
  firstname : string,
  lastname : string,
  title : string,
  business_unit : string,
  is_user : boolean
}
export type MembersType = Array<MemberType>;