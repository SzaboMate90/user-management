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
import { StyledHeader } from './Header.style';
import DeveloperName from './../DeveloperName/DeveloperName';
import AddNewMemberButton from './../AddNewMemberButton/AddNewMemberButton';
import SaveChangesButton from './../SaveChangesButton/SaveChangesButton';
import NewMemberForm from './../NewMemberForm/NewMemberForm';
import { isEmptyObject } from '../../tools/tools';
// Main
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isModalOpened: false
        };
        _this.openModal = _this.openModal.bind(_this);
        _this.closeModal = _this.closeModal.bind(_this);
        return _this;
    }
    Header.prototype.openModal = function () {
        this.setState({ isModalOpened: true });
    };
    Header.prototype.closeModal = function () {
        this.setState({ isModalOpened: false });
    };
    Header.prototype.render = function () {
        var _a = this.props, unsavedChanges = _a.unsavedChanges, developerName = _a.developerName;
        var isModalOpened = this.state.isModalOpened;
        var hasSaveChangesButton = !((unsavedChanges && isEmptyObject(unsavedChanges)) || !unsavedChanges);
        var showCandidateName = !hasSaveChangesButton;
        return (<StyledHeader highlighted={hasSaveChangesButton}>
        {showCandidateName ? (<DeveloperName>
            {developerName}
          </DeveloperName>) : null}
        {hasSaveChangesButton ? <SaveChangesButton /> : null}
        <AddNewMemberButton onClick={this.openModal}/>
        {isModalOpened ? <NewMemberForm closeModal={this.closeModal}/> : null}
      </StyledHeader>);
    };
    return Header;
}(React.Component));
// Store connection
var mapStateToProps = function (state) {
    var unsavedChanges = state.unsavedChanges;
    return ({
        unsavedChanges: unsavedChanges
    });
};
export default connect(mapStateToProps)(Header);
//# sourceMappingURL=Header.jsx.map