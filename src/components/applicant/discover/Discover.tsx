import PeopleDiscover from './PeopleDiscover'
import Filter from '../filter/Filter'
import useDiscoverStore from 'src/stores/discoverStore'
import JobDiscover from './JobDiscover'

const Discover = () => {
  const tabKey = useDiscoverStore(state=>state.tabKey)
  
  const renderTabContent = ()=>{
    switch (tabKey) {
      case 'jobs':
        return <JobDiscover/>;
      case 'people':
        return <PeopleDiscover/>;
      case 'companies':
        return <></>;
      default:
        return <></>;
    }
  }

  return (
    <div className='flex flex-col'>
        <Filter />
        {renderTabContent()}
    </div>
  )
}

export default Discover