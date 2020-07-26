var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import Actions from './actions';
import { getRandomId } from '../tools/tools';
/*
* Reducers
* */
var defaultState = {
    members: [],
    rows: [],
    unsavedChanges: {}
};
function setMembersData(state, action) {
    var members = action.members;
    var rows = [];
    members && members.forEach(function (member) {
        rows.push({
            person_id: member.person_id,
            role: "",
            access_level: ""
        });
    });
    return __assign(__assign({}, state), { members: members,
        rows: rows });
}
function addNewMember(state, action) {
    var member = action.member;
    var newMembers = __spreadArrays(state.members);
    var alreadyExist = newMembers.find(function (currMember) { return currMember.person_id === member.person_id; });
    if (!alreadyExist) {
        newMembers.push(__assign(__assign({}, member), { person_id: getRandomId() }));
    }
    return __assign(__assign({}, state), { members: newMembers });
}
function addNewRow(state) {
    return __assign(__assign({}, state), { rows: __spreadArrays(state.rows, [
            {
                person_id: null,
                role: null,
                access_level: null
            }
        ]) });
}
function removeRow(state, action) {
    var rowIndex = action.rowIndex;
    var newRows = __spreadArrays(state.rows).filter(function (row, index) { return index !== rowIndex; });
    return __assign(__assign({}, state), { rows: newRows });
}
function changeUnsavedProperty(state, rowIndex, propertyName, newValue) {
    var newUnsavedChanges = __assign({}, state.unsavedChanges);
    if (!newUnsavedChanges[rowIndex]) {
        newUnsavedChanges[rowIndex] = {};
    }
    newUnsavedChanges[rowIndex][propertyName] = newValue;
    return newUnsavedChanges;
}
function memberChanged(state, action) {
    var rowIndex = action.rowIndex, memberId = action.memberId;
    var newUnsavedChanges = changeUnsavedProperty(state, rowIndex, "person_id", memberId);
    return __assign(__assign({}, state), { unsavedChanges: newUnsavedChanges });
}
function memberRoleChanged(state, action) {
    var rowIndex = action.rowIndex, role = action.role;
    var newUnsavedChanges = changeUnsavedProperty(state, rowIndex, "role", role);
    return __assign(__assign({}, state), { unsavedChanges: newUnsavedChanges });
}
function memberAccessLevelChanged(state, action) {
    var rowIndex = action.rowIndex, accessLevel = action.accessLevel;
    var newUnsavedChanges = changeUnsavedProperty(state, rowIndex, "access_level", accessLevel);
    return __assign(__assign({}, state), { unsavedChanges: newUnsavedChanges });
}
function saveChanges(state) {
    var unsavedChanges = state.unsavedChanges;
    var newRows = __spreadArrays(state.rows);
    if (unsavedChanges) {
        newRows.forEach(function (row, index) {
            var hasUnsavedChanges = unsavedChanges[index];
            if (hasUnsavedChanges) {
                newRows[index] = __assign(__assign({}, row), hasUnsavedChanges);
            }
        });
    }
    return __assign(__assign({}, state), { rows: newRows, unsavedChanges: {} });
}
export default function (state, action) {
    if (state === void 0) { state = __assign({}, defaultState); }
    var newState;
    switch (action.type) {
        case Actions.SET_MEMBERS_DATA:
            newState = setMembersData(state, action);
            break;
        case Actions.ADD_NEW_MEMBER:
            newState = addNewMember(state, action);
            break;
        case Actions.ADD_NEW_ROW:
            newState = addNewRow(state);
            break;
        case Actions.REMOVE_ROW:
            newState = removeRow(state, action);
            break;
        case Actions.MEMBER_CHANGED:
            newState = memberChanged(state, action);
            break;
        case Actions.MEMBER_ROLE_CHANGED:
            newState = memberRoleChanged(state, action);
            break;
        case Actions.MEMBER_ACCESS_LEVEL_CHANGED:
            newState = memberAccessLevelChanged(state, action);
            break;
        case Actions.SAVE_CHANGES:
            newState = saveChanges(state);
            break;
        default:
            newState = state;
            break;
    }
    return newState;
}
//# sourceMappingURL=reducers.jsx.map