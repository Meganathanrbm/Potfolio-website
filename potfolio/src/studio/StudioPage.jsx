import { Studio } from 'sanity';

import config from './sanity.config';


const StudioPage = () => (
  <div style={{ height: '100vh', width: '100%' }}>
    <Studio config={config} />
  </div>
);

export default StudioPage;
