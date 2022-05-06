const getConfigKeys = () => ({
  serverAPI: {
    url: import.meta.env.VITE_SERVER_API_URL || "",
  },
})

export default getConfigKeys
