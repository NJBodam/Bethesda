interface SermonFilterProps {
  speakers: string[];
  selectedSpeaker: string;
  selectedDate: string;
  onSpeakerChange: (speaker: string) => void;
  onDateChange: (date: string) => void;
  onReset: () => void;
}

export function SermonFilter({
  speakers,
  selectedSpeaker,
  selectedDate,
  onSpeakerChange,
  onDateChange,
  onReset,
}: SermonFilterProps) {
  const hasFilters = selectedSpeaker !== '' || selectedDate !== '';

  return (
    <div className="sermon-filter">
      <div className="sermon-filter__controls">
        <div className="sermon-filter__group">
          <label htmlFor="speaker-filter" className="sermon-filter__label">
            Speaker
          </label>
          <select
            id="speaker-filter"
            className="sermon-filter__select"
            value={selectedSpeaker}
            onChange={(e) => onSpeakerChange(e.target.value)}
          >
            <option value="">All Speakers</option>
            {speakers.map((speaker) => (
              <option key={speaker} value={speaker}>
                {speaker}
              </option>
            ))}
          </select>
        </div>

        <div className="sermon-filter__group">
          <label htmlFor="date-filter" className="sermon-filter__label">
            Date
          </label>
          <input
            id="date-filter"
            type="month"
            className="sermon-filter__input"
            value={selectedDate}
            onChange={(e) => onDateChange(e.target.value)}
          />
        </div>

        {hasFilters && (
          <button
            className="sermon-filter__reset"
            onClick={onReset}
            type="button"
          >
            Clear Filters
          </button>
        )}
      </div>
    </div>
  );
}
