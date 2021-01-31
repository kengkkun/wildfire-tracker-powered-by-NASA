import spiner from './spinner.gif';

const Loader = () => {
  return (
    <div className='loader'>
      <img src={spiner} alt='Loading' />
      <h1>Fetching Data</h1>
    </div>
  );
};

export default Loader;
