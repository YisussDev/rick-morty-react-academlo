import React from 'react'
import useFetching from '../../functions/useFetching'
import NavBar from '../NavBar/NavBar';
import Search from '../Search/Search';
import Cards from '../Cards/Cards';
import Filter from '../Filter/Filter';
import './Home.css'
import ButtonsPage from '../Buttons/ButtonsPage';
import ButtonsPageLocation from '../Buttons/ButtonsPageLocation';
import CardLocation from '../Cards/CardLocation';
import LocationInfo from './LocationInfo';
import Contact from '../Contact/Contact';

const Home = () => {
  const { data, filterFetch, filter, goHome, locationData, changePage, page, sendFilter, openLocation, reset } = useFetching();

  return (
    <div className="Home">
      <NavBar goHome={goHome} />
      <div className='Utilities'>
        <Search filterFetch={filterFetch} />
        <Filter
          reset={reset}
          sendFilter={sendFilter}
          filterCharacter={filterFetch}
          specie={filter[0]}
          status={filter[1]}
          gender={filter[2]} />
      </div>
      {!openLocation ? <section className='render' id='render'>
        {data.results?.map(res => (
          <Cards key={res.id}
            name={res.name}
            img={res.image}
            specie={res.species}
            gender={res.gender}
            episodes={res.episode.length}
            status={res.status}
          />
        ))}
      </section>
        :
        <section className='render' id='render'>
          <LocationInfo
            population={locationData.residents?.length}
            dimension={locationData.dimension}
            type={locationData.type}
            name={locationData.name}
          />
          {locationData.residents?.map((res, ind) => {
            if ((ind < page * 20) && (ind >= (page - 1) * 20)) {
              return <CardLocation url={res} key={res} />
            }
            else {
              return null
            }
          })}
        </section>}
      {
        !openLocation ?
          <ButtonsPage dataInfo={data.info} pageActual={page} changePage={changePage} /> :
          <ButtonsPageLocation dataInfo={locationData.residents?.length} pageActual={page} changePage={changePage} />
      }
      <Contact />
    </div>
  )
}

export default Home