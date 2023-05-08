export default defineEventHandler(async () => {
  try {
    const data = await $fetch('http://109.169.23.124:8288/status-json.xsl')
    return {
      title: data.icestats.source.title,
    }
  } catch {}
})
