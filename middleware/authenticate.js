export default function ({ app, redirect }) {
  // If the user is not authenticated
  if (!app.context.app.$cookies.get('token')) {
    return redirect('/')
  }
}
