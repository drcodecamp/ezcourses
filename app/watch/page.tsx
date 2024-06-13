import MuxPlayer from '@mux/mux-player-react'

interface ParamsType {
  slug: string
}

async function WatchPage({params}: { params: ParamsType }) {
    const asset = params.slug || 'J45S701T02bc2EpPKmjQZDmWI9B6UiU3uSyGfO00zF5UWs'
    return (
        <MuxPlayer
            streamType="on-demand"
            playbackId={asset}
            accentColor="#ac39f2"
        />
    )
}

export default WatchPage
