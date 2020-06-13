import React from 'react'
import { Table,} from 'antd';
export default function Tables(props) {
  const { columns, list } = props
    return (
      <Table columns={columns} dataSource={list} rowKey={v => v.id} />
    )
}
