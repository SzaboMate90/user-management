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
import { addNewRow } from '../../../../redux/actions';
import { StyledAddMemberRow } from './AddMemberRow.style';
import Link from '../../../Link/Link';
// Main
var AddMemberRow = /** @class */ (function (_super) {
    __extends(AddMemberRow, _super);
    function AddMemberRow(props) {
        var _this = _super.call(this, props) || this;
        _this.onAddNewRow = _this.onAddNewRow.bind(_this);
        return _this;
    }
    AddMemberRow.prototype.onAddNewRow = function () {
        this.props.dispatch(addNewRow());
    };
    AddMemberRow.prototype.render = function () {
        return (<StyledAddMemberRow>
        <Link onClick={this.onAddNewRow}>
          {"Add new member"}
        </Link>
      </StyledAddMemberRow>);
    };
    return AddMemberRow;
}(React.Component));
// Store connection
export default connect()(AddMemberRow);
//# sourceMappingURL=AddMemberRow.jsx.map