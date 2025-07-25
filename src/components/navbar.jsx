import React from 'react'
import {Flex} from "antd"

export default function navbar({children}) {
  return (
    <Flex vertical>

        {children}
    </Flex>
  )
}
