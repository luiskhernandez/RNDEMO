import { store }  from '../../store';
export function increment () {
  console.log(store.getState())
  return {
    type: 'INCREMENT'
  }
}
