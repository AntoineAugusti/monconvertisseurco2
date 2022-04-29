import React from 'react'

import CO2EModal from 'components/modals/CO2EModal'
import TilesModal from 'components/modals/TilesModal'
import ShareModal from 'components/modals/ShareModal'

export default function ModalWrapper() {
  return (
    <>
      <CO2EModal />
      <TilesModal />
      <ShareModal />
    </>
  )
}
