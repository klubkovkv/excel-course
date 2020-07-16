import {Excel} from '@/components/excel/Excel'
import {Header} from '@/components/header/Header'
import {Table} from '@/components/table/Table'
import {Toolbar} from '@/components/toolbar/Toolbar'
import {Formula} from '@/components/formula/Formula'
import {createStore} from '@core/createStore'
import {storage, debounce} from '@core/utils'
import {rootReducer} from '@/redux/rootReducer'
import {initialSatate} from '@/redux/initialState'
import '@/scss/index.scss'


const store = createStore(rootReducer, initialSatate)

const stateListener = debounce(state => {
  console.log('App State:', state)
  storage('excel-state', state)
}, 300)

store.subscribe(stateListener)

const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table],
  store
})

excel.render()
