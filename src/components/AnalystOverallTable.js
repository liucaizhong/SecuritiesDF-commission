import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'
import { Table } from 'antd'

class AnalystOverallTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
    }
  }

  componentDidMount() {}

  render() {
    const { intl } = this.props

    const columnWidth = 80

    const columns = [{
      title: intl.formatMessage({
        id: 'name',
      }),
      dataIndex: 'name',
      width: columnWidth,
      fixed: 'left',
    }, {
      title: intl.formatMessage({
        id: 'shanghai',
      }),
      dataIndex: 'shanghai',
      width: columnWidth,
      sorter: ({ shanghai: a }, { shanghai: b }) => {
        return a.localeCompare(b)
      },
    }, {
      title: intl.formatMessage({
        id: 'guangshen',
      }),
      dataIndex: 'guangshen',
      width: columnWidth,
      sorter: ({ guangshen: a }, { guangshen: b }) => {
        return a.localeCompare(b)
      },
    }, {
      title: intl.formatMessage({
        id: 'beijing',
      }),
      dataIndex: 'beijing',
      width: columnWidth,
      sorter: ({ beijing: a }, { beijing: b }) => {
        return a.localeCompare(b)
      },
    }, {
      title: intl.formatMessage({
        id: 'vip',
      }),
      dataIndex: 'vip',
      width: columnWidth + 40,
      sorter: ({ vip: a }, { vip: b }) => {
        return a.localeCompare(b)
      },
    }, {
      title: intl.formatMessage({
        id: 'trading',
      }),
      dataIndex: 'trading',
      width: columnWidth + 20,
      sorter: ({ trading: a }, { trading: b }) => {
        return a.localeCompare(b)
      },
    }, {
      title: intl.formatMessage({
        id: 'others',
      }),
      dataIndex: 'others',
      width: columnWidth,
      sorter: ({ others: a }, { others: b }) => {
        return a.localeCompare(b)
      },
    }, {
      title: intl.formatMessage({
        id: 'overall',
      }),
      dataIndex: 'overall',
      width: columnWidth,
      sorter: ({ overall: a }, { overall: b }) => {
        return a.localeCompare(b)
      },
    }, {
      title: intl.formatMessage({
        id: 'fee',
      }),
      dataIndex: 'fee',
      width: columnWidth + 20,
      sorter: ({ fee: a }, { fee: b }) => {
        return a.localeCompare(b)
      },
    }, {
      title: intl.formatMessage({
        id: 'rank',
      }),
      dataIndex: 'rank',
      width: columnWidth - 10,
      sorter: ({ rank: a }, { rank: b }) => {
        return a.localeCompare(b)
      },
    }]

    const data = [{
      key: 0,
      // quarter: 0,
      name: '孙金霞',
      shanghai: '853.27',
      guangshen: '564.83',
      beijing: '626.50',
      vip: '0.00',
      trading: '0.00',
      others: '0.00',
      overall: '2044.60',
      fee: '20446.00',
      rank: 1,
    }, {
      key: 23,
      // quarter: 0,
      name: '薛俊',
      shanghai: '737.92',
      guangshen: '173.40',
      beijing: '373.00',
      vip: '105.00',
      trading: '0.00',
      others: '0.00',
      overall: '1389.33',
      fee: '13893.30',
      rank: 2,
    }]

    return (
      <Table
        className="analyst-overall-table"
        columns={columns}
        dataSource={data}
        bordered
        pagination={false}
        loading={this.state.loading}
        scroll={{ x: (columnWidth * 11) + 10 }}
      />
    )
  }
}

AnalystOverallTable.propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(AnalystOverallTable)
