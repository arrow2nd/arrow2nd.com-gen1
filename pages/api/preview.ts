import type { NextApiRequest, NextApiResponse } from 'next'

import { Client } from 'libs/client'
import { toStringId } from 'libs/util'

import type { WorkContent } from 'types/cms/work'

const Preview = async (req: NextApiRequest, res: NextApiResponse) => {
  const slug = toStringId(req.query.slug)

  // slugが存在しない場合は404を返す
  if (!slug) {
    return res.status(404).end()
  }

  // 下書きのコンテンツを取得
  const content = await Client.get<WorkContent>({
    endpoint: 'works',
    contentId: slug,
    queries: { draftKey: toStringId(req.query.draftKey) }
  }).catch((err) => console.error(err))

  // コンテンツが無い場合はslugが正しくないので401を返す
  if (!content) {
    return res.status(401).json({ message: 'Invalid slug' })
  }

  // レスポンス組み立て
  res.setPreviewData({
    slug: content.id,
    draftKey: req.query.draftKey
  })

  res.writeHead(307, { Location: `/works/${content.id}` })
  res.end('Preview mode enabled!')
}

export default Preview
