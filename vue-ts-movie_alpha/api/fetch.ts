import axios from 'axios'
import type { VercelRequest, VercelResponse } from '@vercel/node'

const { API_KEY } = process.env.API_KEY

interface RequestBody {
  data: {
    info: string
    page: string
    flag: string
  }
}

export default async function (req: VercelRequest, res: VercelResponse) {
  try {
    const { data } = req.body as Partial<RequestBody>
    if (data!.flag === 'movies') {
      const { data: responseValue } = await axios.get(
        `https://omdbapi.com?apikey=${API_KEY}&s=${data!.info}&page=${
          data!.page
        }`
      )
      res.status(200).json(responseValue)
    } else {
      const { data: responseValue } = await axios.get(
        `https://omdbapi.com?apikey=${API_KEY}&i=${data!.info}`
      )
      res.status(200).json(responseValue)
    }
  } catch (e) {
    res.status(500).json({ error: 'An error occurred' })
  }
}
