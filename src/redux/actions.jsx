export var SET_MEMBERS_DATA = "SET_MEMBERS_DATA";
export var setMembersData = function (members) { return ({ type: SET_MEMBERS_DATA, members: members }); };
export var ADD_NEW_MEMBER = "ADD_NEW_MEMBER";
export var addNewMember = function (member) { return ({ type: ADD_NEW_MEMBER, member: member }); };
export var MEMBER_ROLE_CHANGED = "MEMBER_ROLE_CHANGED";
export var memberRoleChanged = function (rowIndex, role) { return ({ type: MEMBER_ROLE_CHANGED, rowIndex: rowIndex, role: role }); };
export var MEMBER_CHANGED = "MEMBER_CHANGED";
export var memberChanged = function (rowIndex, memberId) { return ({ type: MEMBER_CHANGED, rowIndex: rowIndex, memberId: memberId }); };
export var MEMBER_ACCESS_LEVEL_CHANGED = "MEMBER_ACCESS_LEVEL_CHANGED";
export var memberAccessLevelChanged = function (rowIndex, accessLevel) { return ({ type: MEMBER_ACCESS_LEVEL_CHANGED, rowIndex: rowIndex, accessLevel: accessLevel }); };
export var ADD_NEW_ROW = "ADD_NEW_ROW";
export var addNewRow = function () { return ({ type: ADD_NEW_ROW }); };
export var REMOVE_ROW = "REMOVE_ROW";
export var removeRow = function (rowIndex) { return ({ type: REMOVE_ROW, rowIndex: rowIndex }); };
export var SAVE_CHANGES = "SAVE_CHANGES";
export var saveChanges = function () { return ({ type: SAVE_CHANGES }); };
export default {
    SET_MEMBERS_DATA: SET_MEMBERS_DATA,
    setMembersData: setMembersData,
    ADD_NEW_MEMBER: ADD_NEW_MEMBER,
    addNewMember: addNewMember,
    MEMBER_ROLE_CHANGED: MEMBER_ROLE_CHANGED,
    memberRoleChanged: memberRoleChanged,
    MEMBER_ACCESS_LEVEL_CHANGED: MEMBER_ACCESS_LEVEL_CHANGED,
    memberAccessLevelChanged: memberAccessLevelChanged,
    ADD_NEW_ROW: ADD_NEW_ROW,
    addNewRow: addNewRow,
    REMOVE_ROW: REMOVE_ROW,
    removeRow: removeRow,
    MEMBER_CHANGED: MEMBER_CHANGED,
    memberChanged: memberChanged,
    SAVE_CHANGES: SAVE_CHANGES,
    saveChanges: saveChanges
};
//# sourceMappingURL=actions.jsx.map