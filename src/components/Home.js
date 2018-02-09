// home page
import React, { Component } from 'react'
import { TreeSelect, Button, Radio, Icon, Tag } from 'antd'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'
import moment from 'moment'
import YearSwitchPanel from './YearSwitchPanel'
import AnalystOverallTable from './AnalystOverallTable'

const SHOW_PARENT = TreeSelect.SHOW_PARENT
const RadioButton = Radio.Button
const RadioGroup = Radio.Group
const CheckableTag = Tag.CheckableTag
const quarterTags = ['Q1', 'Q2', 'Q3', 'Q4']

class Home extends Component {
  constructor(props) {
    super(props)

    const treeData = [{
      label: '全体研究员',
      value: '0-1',
      key: '0-1',
      children: [{
        label: '金融',
        value: '1001',
        key: '1001',
        children: [{
          label: '唐子佩',
          value: '1',
          key: '1',
        }, {
          label: '张潇',
          value: '2',
          key: '2',
        }],
      }, {
        label: '房地产',
        value: '1002',
        key: '1002',
        children: [{
          label: '竺劲',
          value: '143',
          key: '143',
        }, {
          label: '董博',
          value: '144',
          key: '144',
        }, {
          label: '房诚琦',
          value: '145',
          key: '145',
        }],
      }, {
        label: '中小市值',
        value: '1003',
        key: '1003',
        children: [{
          label: '竺劲',
          value: '8',
          key: '8',
        }, {
          label: '陈宇哲',
          value: '9',
          key: '9',
        }, {
          label: '何靖雯',
          value: '10',
          key: '10',
        }],
      }, {
        label: '金融工程',
        value: '1006',
        key: '1006',
        children: [{
          label: '孙金霞',
          value: '15',
          key: '15',
        }, {
          label: '朱剑涛',
          value: '16',
          key: '16',
        }, {
          label: '邱蕊',
          value: '17',
          key: '17',
        }, {
          label: '王星星',
          value: '18',
          key: '18',
        }, {
          label: '张惠澍',
          value: '19',
          key: '19',
        }],
      }],
    }]

    const curYear = moment().year()
    const curQuarter = moment().quarter() - 1

    this.state = {
      treeData,
      selected: ['0-1'],
      mainTitle: 0,
      roleTab: 0,
      dataTab: 0,
      year0: curYear,
      year1: curYear,
      selectedQuarterTags: [quarterTags[curQuarter]],
    }
  }

  onTreeChange = (selected, ...args) => {
    console.log('onChange ', selected, args)
    this.setState({ selected })
  }

  onSwitch = () => {
    this.setState({
      mainTitle: this.state.mainTitle ^ 1,
      roleTab: this.state.roleTab ^ 1,
    })
  }

  onModelChange = (e) => {
    console.log(`radio checked:${e.target.value}`)
    this.setState({
      dataTab: e.target.value,
    })
  }

  onChangeYear0 = (year0) => {
    this.setState({
      year0,
    })
  }

  onQuarterTagsChange = (tag, checked) => {
    const { selectedQuarterTags } = this.state
    // let nextSelectedQuarterTags = []
    // if (checked) {
    //   if (tag === 'ALL') {
    //     nextSelectedQuarterTags = [...quarterTags]
    //   } else {
    //     nextSelectedQuarterTags = [...selectedQuarterTags, tag]
    //     if (nextSelectedQuarterTags.length === quarterTags.length - 1) {
    //       nextSelectedQuarterTags = [...quarterTags]
    //     }
    //   }
    // } else if (tag === 'ALL') {
    //   nextSelectedQuarterTags = []
    // } else {
    //   nextSelectedQuarterTags = selectedQuarterTags.filter((t) => t !== tag)
    //   if (nextSelectedQuarterTags.length === quarterTags.length - 1) {
    //     nextSelectedQuarterTags = nextSelectedQuarterTags.filter((t) => t !== 'ALL')
    //   }
    // }

    const nextSelectedQuarterTags = checked ? [tag] : selectedQuarterTags

    this.setState({ selectedQuarterTags: nextSelectedQuarterTags })
  }

  render() {
    const { intl } = this.props

    const mainTitles = ['Home.Header.mainTitle0', 'Home.Header.mainTitle1']

    const tProps = {
      treeData: this.state.treeData,
      value: this.state.selected,
      onChange: this.onTreeChange,
      treeCheckable: true,
      showCheckedStrategy: SHOW_PARENT,
      searchPlaceholder: intl.formatMessage({
        id: 'Home.TreeSelect.placeholder',
      }),
      size: 'large',
      allowClear: true,
      treeNodeFilterProp: 'label',
    }

    return (
      <div className="Home">
        <header>
          <div className="left">
            <FormattedMessage id={mainTitles[this.state.mainTitle]} />
            <Button type="primary" size="small" onClick={this.onSwitch}>
              {intl.formatMessage({
                id: 'Home.Button.switch',
              })}
            </Button>
          </div>
          <div className="right">
            <RadioGroup defaultValue="0" onChange={this.onModelChange}>
              <RadioButton value="0">
                <Icon type="bars" />
              </RadioButton>
              <RadioButton value="1">
                <Icon type="dot-chart" />
              </RadioButton>
            </RadioGroup>
          </div>
        </header>
        <div
          style={{
            display: this.state.roleTab === 0 ? 'block' : 'none',
          }}
        >
          <div className="date-picker">
            <YearSwitchPanel
              onChange={this.onChangeYear0}
              defaultYear={this.state.year0}
            />
            <div className="tag-bar">
              {
                quarterTags.map((tag) => (
                  <CheckableTag
                    key={tag}
                    checked={this.state.selectedQuarterTags.indexOf(tag) > -1}
                    onChange={(checked) => this.onQuarterTagsChange(tag, checked)}
                  >
                    {tag}
                  </CheckableTag>
                ))
              }
            </div>
          </div>
          <TreeSelect className="treeSelect" {...tProps} />
          <AnalystOverallTable />
        </div>
        <div
          style={{
            display: this.state.roleTab === 1 ? 'block' : 'none',
          }}
        >
          hello analyst
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(Home)
