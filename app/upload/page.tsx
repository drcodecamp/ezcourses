import Mux from '@mux/mux-node'
import MuxUploader from '@mux/mux-uploader-react'
import { FC, PropsWithChildren } from 'react'

const mux = new Mux({
  tokenId: process.env.MUX_TOKEN_ID,
  tokenSecret: process.env.MUX_TOKEN_SECRET,
})

const Page: FC<PropsWithChildren> = async () => {
  const directUpload = await mux.video.uploads.create({
    cors_origin: '*',
    new_asset_settings: {
      playback_policy: ['public'],
    },
  })
  return <MuxUploader endpoint={directUpload.url} />
}

export default Page
