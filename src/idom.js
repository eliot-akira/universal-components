import { render } from 'idom'
import Hello from '../components/Hello'

const div = document.getElementById('idom')

render(<Hello lib='Incremental DOM' />, div)