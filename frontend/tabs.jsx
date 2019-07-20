import React from 'react';

class Headers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const selected = this.props.currentTab;

    const tabHeaders = this.props.tabContent.map( (tab, idx) => {
      const tabTitle = tab.title;
      let setClass
        if (idx === selected) { 
          setClass = 'active'
        } else {
          setClass = ''
        }

      return (
        <li key={idx} className={setClass} onClick={() => this.props.changeTab(idx)}>
          {tabTitle}
        </li>
      )

    })

    return (
      <ul className="tab-header">
        {tabHeaders}
      </ul>
    );
  }
}

class Tabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = { selectedTab: 0 };

    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(idx) {
    this.setState({ selectedTab: idx });
  }

  render() {
    const selected = this.props.tabs[this.state.selectedTab]

    return (
      <div className="tabs-section">
          <Headers 
            currentTab={this.state.selectedTab}
            tabContent={this.props.tabs}
            changeTab={this.changeTab}
          />
          <article className="tab-content">{selected.content}</article>
      </div>
      )
  }
}

export default Tabs;