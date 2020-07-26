var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { connect } from 'react-redux';
import { removeRow } from '../../../../../../redux/actions';
import { StyledRemoveMember, iconSize } from './RemoveMember.style';
// Main
var RemoveMember = /** @class */ (function (_super) {
    __extends(RemoveMember, _super);
    function RemoveMember(props) {
        var _this = _super.call(this, props) || this;
        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }
    RemoveMember.prototype.onClick = function () {
        var _a = this.props, dispatch = _a.dispatch, rowIndex = _a.rowIndex;
        dispatch(removeRow(rowIndex));
    };
    RemoveMember.prototype.render = function () {
        return (<StyledRemoveMember title={"Remove"} onClick={this.onClick} size={iconSize}/>);
    };
    return RemoveMember;
}(React.Component));
// Store connection
export default connect()(RemoveMember);
//# sourceMappingURL=RemoveMember.jsx.map