export default function ({ store, redirect }) {
  // If the user is not authenticated
  if (_.isNil(store.getters['auth/token'])) {
    return redirect('/')
  }
}
