import { useState, useMemo } from 'react';
import { sermons, speakers } from '../data/sermons';
import type { Sermon } from '../types/sermon';
import { SermonCard } from '../components/SermonCard';
import { SermonDetail } from '../components/SermonDetail';
import { SermonFilter } from '../components/SermonFilter';

export function SermonsPage() {
  const [selectedSermon, setSelectedSermon] = useState<Sermon | null>(null);
  const [selectedSpeaker, setSelectedSpeaker] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const filteredSermons = useMemo(() => {
    return sermons.filter((sermon) => {
      const speakerMatch =
        selectedSpeaker === '' || sermon.speaker === selectedSpeaker;
      const dateMatch =
        selectedDate === '' || sermon.date.startsWith(selectedDate);
      return speakerMatch && dateMatch;
    });
  }, [selectedSpeaker, selectedDate]);

  const handleReset = () => {
    setSelectedSpeaker('');
    setSelectedDate('');
  };

  if (selectedSermon) {
    return (
      <SermonDetail
        sermon={selectedSermon}
        onBack={() => setSelectedSermon(null)}
      />
    );
  }

  return (
    <div className="sermons-page">
      <header className="sermons-page__header">
        <h1 className="sermons-page__title">Sermons</h1>
        <p className="sermons-page__subtitle">
          Be encouraged, equipped, and empowered through the Word of God.
        </p>
      </header>

      <SermonFilter
        speakers={speakers}
        selectedSpeaker={selectedSpeaker}
        selectedDate={selectedDate}
        onSpeakerChange={setSelectedSpeaker}
        onDateChange={setSelectedDate}
        onReset={handleReset}
      />

      {filteredSermons.length === 0 ? (
        <p className="sermons-page__empty">
          No sermons found for the selected filters.
        </p>
      ) : (
        <div className="sermons-page__grid">
          {filteredSermons.map((sermon) => (
            <SermonCard
              key={sermon.id}
              sermon={sermon}
              onClick={setSelectedSermon}
            />
          ))}
        </div>
      )}
    </div>
  );
}
