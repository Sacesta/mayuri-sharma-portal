import React from "react";

var ReactCSSTransitionGroup = React?.addons?.CSSTransitionGroup;
var demoMode = true;

export class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
    this.changeTab = this.changeTab.bind(this);
    this.moveTracker = this.moveTracker.bind(this);
  }

  componentDidMount() {
    this.moveTracker();
  }

  moveTracker() {
    const dom = ReactDOM;
    var title = dom
      .findDOMNode(this)
      .querySelector('.tabs__titles__title[data-active="true"]');
    var tracker = dom.findDOMNode(this).querySelector(".tabs__tracker");
    // Velocity(
    //   tracker,
    //   { width: title.clientWidth, left: title.offsetLeft },
    //   { duration: 1000, easing: [250, 15] }
    // );
  }

  changeTab(e) {
    e.stopPropagation();
    this.setState(
      {
        current: e.target.getAttribute("data-index"),
      },
      function () {
        this.moveTracker();
      }
    );
  }

  render() {
    let tabs = this.props.tabs;
    return (
      <div className="tabs">
        <div className="tabs__tracker" />
        <div className="tabs__titles">
          {tabs?.map((tab, index, array) => (
            <h2
              className="tabs__titles__title"
              data-active={this.state.current == index}
              data-index={index}
              key={"tab-title-" + index}
              onClick={this.changeTab}
            >
              {tab.title}
            </h2>
          ))}
        </div>
        <div className="tabs__contents">
          <ReactCSSTransitionGroup
            transitionName="scale"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            <div
              className="tabs__contents__content"
              key={"tab-text-" + this.state.current}
            >
              {tabs[this.state.current].text}
            </div>
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

// if (demoMode) {
//   var titles = document.querySelectorAll(".tabs__titles__title");
//   setTimeout(function () {
//     titles[1].click();
//   }, 1500);
//   setTimeout(function () {
//     titles[2].click();
//   }, 3000);
//   setTimeout(function () {
//     titles[0].click();
//   }, 4500);
// }
export default Tabs;
