import './EpisodesGraph.css'

export default function EpisodesGraph({ characters }) {
  return (
    <div className="EpisodesGraph">
      {characters.map(character => (
        <div key={`EG${character.id}`}>
          {character.name}
          <span
            className="episodeCount"
            style={{ width: `${(character.episode.length / 41) * 100}%` }}
          >
            {`${character.episode.length} ${
              character.episode.length === 1 ? 'episode' : 'episodes'
            }`}
          </span>
        </div>
      ))}
    </div>
  )
}
