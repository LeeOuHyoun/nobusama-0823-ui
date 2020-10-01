export default function ({ store, redirect }) {
  // If the user is authenticated
  if (_.isNil(store.getters['auth/token'])) {
    return redirect('/')
  }
}
