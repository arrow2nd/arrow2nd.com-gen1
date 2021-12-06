import type { NextApiRequest, NextApiResponse } from 'next'

import { Client } from 'libs/client'
import { toStringId } from 'libs/util'

import type { WorkContent } from 'types/cms/work'

const Preview = async (req: NextApiRequest, res: NextApiResponse) => {
  const workId = toStringId(req.query.slug)

  // slugが存在しない
  if (!workId) {
    return res.status(404).end()
  }

  const content = await Client.get<WorkContent>({
    endpoint: 'works',
    contentId: workId
  })

  // slugが正しくない
  if (!content) {
    return res.status(401).json({ message: 'Invalid slug' })
  }

  res.setPreviewData({
    slug: content.id,
    draftKey: req.query.draftKey
  })
  res.writeHead(307, { Location: `/works/${content.id}` })
  res.end('Preview mode enabled!')
}

export default Preview
