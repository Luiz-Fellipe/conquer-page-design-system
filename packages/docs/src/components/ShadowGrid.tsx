import { shadows } from '@conquerpage/tokens'

export function ShadowGrid() {
  return Object.entries(shadows).map(([key, value]) => {
    return (
      <div key={key} style={{ backgroundColor: '#fff', padding: '2rem' }}>
        <div
          style={{
            display: ' flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            boxShadow: value,
            padding: '2rem',
            color: '#000',
          }}
        >
          <strong>${key}</strong>
          <span>{value}</span>
        </div>
      </div>
    )
  })
}
