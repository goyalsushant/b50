import type { SourceChunk } from "../types/types"

interface Props {
    sources: SourceChunk[]
}

function SourceList({ sources }: Props) {
    return (
        <div className="sources">
            <h4>Sources</h4>

            {
                sources.map((source, index) => (
                    <div key={index} className=' source-card'>
                        <div className='file'>
                            {source.file}
                        </div>
                        <div className='score'>
                            Similarity: {" "}{source.score.toFixed(3)}
                        </div>
                        <p>{source.text}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default SourceList