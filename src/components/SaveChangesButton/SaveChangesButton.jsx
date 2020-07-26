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
import { saveChanges } from '../../redux/actions';
import { StyledSaveChangesButton } from './SaveChangesButton.style';
// Main
var SaveChangesButton = /** @class */ (function (_super) {
    __extends(SaveChangesButton, _super);
    function SaveChangesButton(props) {
        var _this = _super.call(this, props) || this;
        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }
    SaveChangesButton.prototype.onClick = function () {
        this.props.dispatch(saveChanges());
    };
    SaveChangesButton.prototype.render = function () {
        return (<StyledSaveChangesButton onClick={this.onClick} children={"Save changes"}/>);
    };
    return SaveChangesButton;
}(React.Component));
// Store connection
export default connect()(SaveChangesButton);
//# sourceMappingURL=SaveChangesButton.jsx.map