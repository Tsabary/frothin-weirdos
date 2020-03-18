import "./styles.scss";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import history from "../../../history";

import { setCurrentPage } from "../../../actions";

const Menu = ({ setCurrentPage, page }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const myHistory = useHistory(history);
  const turnToLowerCaseWithHyphen = string => {
    return string
      .toLowerCase()
      .split(" ")
      .join("-");
  };

  const handleChange = (page, path) => {
    setCurrentPage(page);
    myHistory.push(path);
    setIsMenuOpen(false);
  };

  const renderMenuItems = array => {
    return array.map(item => {
      const smallHyphenedItem = turnToLowerCaseWithHyphen(item);
      return (
        <li className="navigation__item">
          <input
            className="menu-item__radio"
            id={smallHyphenedItem}
            type="radio"
            name="menu-items"
            checked={page === smallHyphenedItem}
            onChange={() =>
              handleChange(smallHyphenedItem, `/${smallHyphenedItem}`)
            }
          />
          <label htmlFor={smallHyphenedItem} className="navigation__link">
            {item}
          </label>
        </li>
      );
    });
  };

  const renderDropDownMenuItems = group => {
    return group.pages.map(page => {
      return (
        <div
          onClick={() =>
            handleChange(
              turnToLowerCaseWithHyphen(group.title),
              `/${turnToLowerCaseWithHyphen(
                group.title
              )}/${turnToLowerCaseWithHyphen(page)}`
            )
          }
          className="navigation__item"
          key={page}
        >
          {page}
        </div>
      );
    });
  };

  const renderDropDownMenu = array => {
    return array.map(group => {
      return (
        <details>
          <summary className="navigation__item">{group.title}</summary>
          <div>{renderDropDownMenuItems(group)}</div>
        </details>
      );
    });
  };

  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
        checked={isMenuOpen}
      />
      <label
        for="navi-toggle"
        className="navigation__button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          {renderMenuItems(["About Us", "Donate", "Events"])}
          {renderDropDownMenu([
            {
              title: "Burning Man",
              pages: ["Leave No Trace", "Tips and Tricks", "Camp with Us"]
            }
          ])}
          {renderMenuItems(["Crew", "Blog", "Contact"])}
        </ul>
      </nav>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    page: state.page
  };
};

export default connect(mapStateToProps, { setCurrentPage })(Menu);
