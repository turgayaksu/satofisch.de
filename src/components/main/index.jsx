import Timer from '../countdown';

export default function MainContainer() {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center'>
      <div>
        <h2 className='text-2xl md:text-4xl font-semibold mb-4'>
          Bauarbeiten im Gange
        </h2>
        <p className='w-full md:w-3/4 opacity-50 mb-4'>
          Wir erneuern unsere Website, um Sie besser bedienen zu können. Sie
          können sich in unsere E-Mail-Liste eintragen, um besondere
          Überraschungen für die Eröffnung zu erhalten.
        </p>
        <div className='flex'>
          <input
            type='text'
            className='border border-solid border-1 border-white/20 px-4 py-2 w-30 md:w-80 bg-white/10 text-white placeholder:text-white/30'
            placeholder='E-Mail Adresse'
          />
          <button
            type='button'
            className='px-4 py-2 bg-white/70 text-sf-navy font-semibold hover:bg-white'
          >
            Abonnieren
          </button>
        </div>
      </div>
      <div>
        <Timer />
      </div>
    </div>
  );
}
