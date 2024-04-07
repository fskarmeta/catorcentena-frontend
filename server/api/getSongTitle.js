export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  try {
    const data = await $fetch(
      `http://${config.public.RADIO_HOST_IP}/status-json.xsl`
    )
    return {
      title: data.icestats.source.title,
    }
  } catch {}
})
