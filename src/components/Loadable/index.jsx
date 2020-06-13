import React from 'react';
import Loadable from 'react-loadable'

// 默认的 Loading
const Loading = () => <div>loading</div>

export default function (loader, loading = Loading) {
  return Loadable({
    loader,
    loading,
  })
}
