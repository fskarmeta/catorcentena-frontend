export default async () => {
  try {
    const workbox = await window.$workbox

    if (!workbox) {
      return
    }

    workbox.addEventListener('installed', (event) => {
      if (!event.isUpdate) {
        return
      }

      window.location.reload()
    })
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('workbox error', e.message)
  }
}
