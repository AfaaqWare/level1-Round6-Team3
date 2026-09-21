
import React from 'react'

import {ChevronDown} from "@/assets/icons/icons"


function SortDown() {
  return (
    <div className="flex justify-between">
          <input placeholder="Newest First" />
          <span>{<ChevronDown />}</span>

    </div>
  )
}

export default SortDown
