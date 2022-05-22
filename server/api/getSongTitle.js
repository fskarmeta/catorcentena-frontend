export default defineEventHandler(async (event) => {
    const data = await $fetch('http://109.169.23.17:9090/status-json.xsl')
    return {
        title: data.icestats.source.title
    }
})