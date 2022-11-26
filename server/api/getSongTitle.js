export default defineEventHandler(async () => {
  try {
    const data = await $fetch('http://109.169.23.123:8237/status-json.xsl')
    return {
      title: data.icestats.source.title,
    }
  } catch {}
})
