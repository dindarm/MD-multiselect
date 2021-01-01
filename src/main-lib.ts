import mdms from './components'

import { App } from 'vue'

const MdMultiselect = {
  install: (app: App) => {
    console.log('registered')

    app.component('MdMultiselect', mdms)
  }
}

export default MdMultiselect
