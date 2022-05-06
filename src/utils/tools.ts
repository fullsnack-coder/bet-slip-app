export const mockFetchAPI = <D = any>(success = false, data: D[] = []) => {
  window.fetch = jest.fn().mockResolvedValueOnce({
    ok: success,
    status: success ? 200 : 500,
    json: jest.fn().mockResolvedValueOnce(data),
  })
}
