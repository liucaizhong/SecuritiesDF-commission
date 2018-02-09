import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd'

class YearSwitchPanel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      year: props.defaultYear,
    }
  }

  onPreYear = () => {
    const { onChange } = this.props
    const year = this.state.year - 1
    this.setState({
      year,
    }, onChange(year))
  }

  onNextYear = () => {
    const { onChange } = this.props
    const year = this.state.year + 1
    this.setState({
      year,
    }, onChange(year))
  }

  render() {
    return (
      <div className="year-switch-panel">
        <Icon type="double-left" onClick={this.onPreYear} />
        <span>{this.state.year}</span>
        <Icon type="double-right" onClick={this.onNextYear} />
      </div>
    )
  }
}

YearSwitchPanel.propTypes = {
  onChange: PropTypes.func.isRequired,
  defaultYear: PropTypes.number.isRequired,
}

export default YearSwitchPanel
