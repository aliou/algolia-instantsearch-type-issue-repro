import './App.css';
import { InstantSearch } from 'react-instantsearch-core';
import { algoliasearch } from 'algoliasearch';
import { Box } from '@chakra-ui/react';

const searchClient = algoliasearch('', '');

function App() {
  return (
    <>
      <Box>
        <InstantSearch searchClient={searchClient} indexName=''>
          <div>hello</div>
        </InstantSearch>
      </Box>
    </>
  );
}

export default App;
