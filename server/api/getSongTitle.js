export default defineEventHandler(async () => {
  try {
    const data = await $fetch('http://212.84.160.3:8830/status-json.xsl')
    return {
      title: data.icestats.source.title,
    }
  } catch {}
})
